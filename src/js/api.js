import ToastDefault from './ToastDefault.vue'
import ToastContainer from './ToastContainer.vue'
import {createComponent,getOptions} from './helpers';
import eventBus from './bus.js';

export const useToast = (globalProps = {}) => {
  return {
    open(options) {
      const message = typeof options === 'string' ? options : options.message;
      const type = typeof options === 'string' ? undefined : options.type;
      const propsData = Object.assign({}, globalProps, options);
      const toastComponent = options.customToast || globalProps.customToast || {
        component: ToastDefault,
        props: { 
          message,
          type
        }
      }

      const instance = createComponent(ToastContainer, propsData, document.body, {
        default: toastComponent
      });

      return {
        dismiss: instance.ctx.dismiss
      }
    },
    clear() {
      eventBus.emit('toast-clear')
    },
    success(message, options = {}) {
      return this.open(getOptions(message, {
        ...options,
        type: 'success'
      }))
    },
    error(message, options = {}) {
      return this.open(getOptions(message, {
        ...options,
        type: 'error'
      }))
    },
    info(message, options = {}) {
      return this.open(getOptions(message, {
        ...options,
        type: 'info'
      }))
    },
    warning(message, options = {}) {
      return this.open(getOptions(message, {
        ...options,
        type: 'warning'
      }))
    },
    default(message, options = {}) {
      return this.open(getOptions(message, {
        ...options,
        type: 'default'
      }))
    }
  }
};
