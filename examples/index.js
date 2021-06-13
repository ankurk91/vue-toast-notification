'use strict';

import {createApp} from 'vue';
import ToastPlugin from '../src/index';

import 'bootstrap/dist/css/bootstrap.min.css';
//import '../src/themes/default/index.scss'
import '../src/themes/sugar/index.scss'

import App from './App.vue';

const app = createApp(App);
app.use(ToastPlugin);
app.mount('#app')
