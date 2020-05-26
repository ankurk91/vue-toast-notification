# Vue Toast Notification

[![downloads](https://badgen.net/npm/dt/vue-toast-notification)](http://npm-stats.com/~packages/vue-toast-notification)
[![npm-version](https://badgen.net/npm/v/vue-toast-notification)](https://www.npmjs.com/package/vue-toast-notification)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-toast-notification)](https://github.com/ankurk91/vue-toast-notification/)
[![build](https://github.com/ankurk91/vue-toast-notification/workflows/build/badge.svg)](https://github.com/ankurk91/vue-toast-notification/actions)
[![license](https://badgen.net/github/license/ankurk91/vue-toast-notification)](https://yarnpkg.com/en/package/vue-toast-notification)

Yet another Vue.js Toast notification plugin.

## [Demo](https://ankurk91.github.io/vue-toast-notification) or [JSFiddle](https://jsfiddle.net/ankurk91/ebakcs62/)

## Installation
```bash
# yarn
yarn add vue-toast-notification

# npm
npm install vue-toast-notification
```

## Usage
```js
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
let instance = Vue.$toast.open('You did it!');
//Vue.$toast.open({/* options */});

// Close specific toast
instance.close();
// Close all opened toast immediately
Vue.$toast.clear();
```

## Available options
The API methods accepts these options:

| Attribute        | Type                | Default              | Description      |
| :---             | :---:               | :---:                | :---             |
|  message         | String              | --                   |  Message text/html (required)   |
|  type            | String              | `success`            |  One of `success`, `info`, `warning`, `error`, `default`  |
|  position        | String              | `bottom-right`       |  One of `top`, `bottom`, `top-right`, `bottom-right`,`top-left`, `bottom-left`  |
|  duration        | Number              | `3000`               |  Visibility duration in milliseconds    |
|  dismissible     | Boolean             | `true`               |  Allow user close by clicking    |
|  onClick         | Function            | --                   |  Do something when user clicks    |
|  onClose         | Function            | --                   |  Do something after toast gets dismissed    |
|  queue           | Boolean             | `false`              |  Wait for existing to close before showing new     |
|  pauseOnHover    | Boolean             | `true`               |  Pause the timer when mouse on over a toast    |
         
## API methods
### `Vue.$toast.open(options)`
This is generic method, you can use this method to make any kind of toast.
```js
// Can accept a message as string and apply rest of options from defaults
Vue.$toast.open('Howdy!');

// Can accept an Object of options
Vue.$toast.open({
    message: 'Something went wrong!',
    type: 'error',
    // all other options may go here
});
```
### `Vue.$toast.success(message,?options)`
There are some proxy methods to make it more readable.
```js
Vue.$toast.success('Profile saved.', {
  // optional options Object
})
```
### `Vue.$toast.error(message,?options)`
### `Vue.$toast.warning(message,?options)`
### `Vue.$toast.info(message,?options)`
### `Vue.$toast.default(message,?options)`

## Global options
You can set options for all the instances during plugin initialization
```js
Vue.use(VueToast, {
  // One of options
  position: 'top'
})
```
Further you can override option when creating new instances
```js
Vue.$toast.success('Order placed.', {
  // override the global option
  position: 'bottom'
})
```

## Install in non-module environments (without webpack)
```html
<!-- Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-toast-notification"></script>
<link href="https://cdn.jsdelivr.net/npm/vue-toast-notification/dist/theme-default.css" rel="stylesheet">
<!-- Init the plugin -->
<script>
Vue.use(VueToast);
</script>
```

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js `>=10.13` and [yarn](https://yarnpkg.com) `>=1.x` pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser 

## Acknowledgements
* Buefy [Toast](https://buefy.org/documentation/toast) component

## License
[MIT](LICENSE.txt) License
