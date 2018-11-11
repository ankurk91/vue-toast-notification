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
    }
  }
};

export default Api;
