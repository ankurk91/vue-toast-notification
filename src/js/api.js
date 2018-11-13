import Component from './Component.vue'

const Api = (Vue, globalOptions = {}) => {
  return {
    open(options) {
      let message;
      if (typeof options === 'string') message = options;

      const defaultParams = {
        message
      };

      const propsData = Object.assign({}, defaultParams, globalOptions, options);

      return new (Vue.extend(Component))({
        el: document.createElement('div'),
        propsData
      })
    },
    success(message, options = {}) {
      return this.open(Object.assign({}, {
        message: message,
        type: 'success'
      }, options))
    },
    error(message, options = {}) {
      return this.open(Object.assign({}, {
        message: message,
        type: 'error'
      }, options))
    },
    info(message, options = {}) {
      return this.open(Object.assign({}, {
        message: message,
        type: 'info'
      }, options))
    },
    warning(message, options = {}) {
      return this.open(Object.assign({}, {
        message: message,
        type: 'warning'
      }, options))
    },
    default(message, options = {}) {
      return this.open(Object.assign({}, {
        message: message,
        type: 'default'
      }, options))
    }
  }
};

export default Api;
