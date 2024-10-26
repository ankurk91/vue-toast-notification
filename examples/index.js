'use strict';

import {createApp} from 'vue';
import ToastPlugin from '../src/index';
import App from './App.vue';

const app = createApp(App);
app.use(ToastPlugin);
app.mount('#app')
