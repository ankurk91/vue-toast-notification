import ToastDefault from './ToastDefault.vue'
import ToastContainer from './ToastContainer.vue'
import {createComponent} from './helpers';
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
      return this.open(Object.assign({}, {
        message,
        type: 'success'
      }, options))
    },
    error(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'error'
      }, options))
    },
    info(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'info'
      }, options))
    },
    warning(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'warning'
      }, options))
    },
    default(message, options = {}) {
      return this.open(Object.assign({}, {
        message,
        type: 'default'
      }, options))
    }
  }
};
