import Component from './Component.vue'
import eventBus from './bus.js';
import {getElementId} from "./helpers";

const Api = (Vue, globalOptions = {}) => {
  return {
    open(options) {
      let message;
      if (typeof options === 'string') message = options;

      const defaultOptions = {
        message,
        id: getElementId()
      };

      const propsData = Object.assign({}, defaultOptions, globalOptions, options);

      return new (Vue.extend(Component))({
        el: document.createElement('div'),
        propsData
      })
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
    },
    isVisible(id){
      return document.getElementById(id) !== null ? true : false;
    }
  }
};

export default Api;
