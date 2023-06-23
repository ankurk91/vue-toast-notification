import ToastContainer from './js/ToastContainer.vue';
import {useToast} from './js/api';
import ToastPositions from './js/positions';

const ToastPlugin = {
  install: (app, options = {}) => {
    let instance = useToast(options);
    app.config.globalProperties.$toast = instance;
    app.provide('$toast', instance)
  }
}

export default ToastPlugin;
export {useToast, ToastPlugin, ToastContainer, ToastPositions}
