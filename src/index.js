import Component from './js/Component.vue';
import Api from './js/api';

const Plugin = (Vue, options = {}) => {
  let methods = Api(Vue, options);
  Vue.$toast = methods;
  Vue.prototype.$toast = methods;
};

Component.install = Plugin;

export default Component;
