# Vue Toast Component

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-toast-notification.svg)](http://npm-stats.com/~packages/vue-toast-notification)
[![npm-version](https://img.shields.io/npm/v/vue-toast-notification.svg)](https://www.npmjs.com/package/vue-toast-notification)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-toast-notification.svg?maxAge=1800)](https://github.com/ankurk91/vue-toast-notification/)
[![license](https://img.shields.io/github/license/ankurk91/vue-toast-notification.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-toast-notification)
[![build-status](https://travis-ci.com/ankurk91/vue-toast-notification.svg?branch=master)](https://travis-ci.com/ankurk91/vue-toast-notification)

Yet another Vue.js Toast notification plugin.

## [Demo](https://ankurk91.github.io/vue-toast-notification) or [JSFiddle](https://jsfiddle.net/user/ankurk91)

## Installation
```bash
# npm
npm install vue-toast-notification --save

# Yarn
yarn add vue-toast-notification
```

## Usage
```js
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

Vue.use(VueToast);
Vue.$toast.open('You did it!');
Vue.$toast.open({/* options */});
```

## Available options
The API methods accepts these options:

| Attribute        | Type                | Default              | Description      |
| :---             | :---:               | :---:                | :---             |
|  message         | String              | --                   |  Message text (required)   |
|  type            | String              | `success`            |  One of `success`, `info`, `warning`, `error`, `default`  |
|  position        | String              | `bottom-right`       |  One of `top`, `bottom`, `top-right`, `bottom-right`,`top-left`, `bottom-left`  |
|  duration        | Number              | `3000`               |  Visibility duration in milliseconds    |
|  dismissible     | Boolean             | `true`               |  Allow user close by clicking    |
|  onClose         | Function            | --                   |  Do something when user clicks    |
|  queue           | Boolean             | `false`              |  Wait for existing to close before showing new     |
         
## API methods
### `Vue.$toast.open(options)`
This is generic method, you can use this method to make any kind of toast.
```js
// Can accept a message as string and apply rest of options from defaults
Vue.$toast.open('message string');

// Can accept an Object of options
Vue.$toast.open({
    message: 'message string',
    type: 'error',
    // all other options
});
```
### `Vue.$toast.success(message,?options)`
There are some proxy method to make it more readable.
```js
Vue.$toast.success("message string", {
  // optional options Object
})
```
### `Vue.$toast.error(message,?options)`
### `Vue.$toast.warning(message,?options)`
### `Vue.$toast.info(message,?options)`
### `Vue.$toast.default(message,?options)`

## Global options
You can set options for all of the instances during plugin initialization
```js
Vue.use(VueToast, {
  // One of options
  position: 'top'
})
```
Further you can override option when creating new instances
```js
Vue.$toast.success("message string", {
  // override the global option
  position: 'bottom'
})
```

## Install in non-module environments (without webpack)
```html
<!-- Vue js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-toast-notification"></script>
<link href="https://cdn.jsdelivr.net/npm/vue-toast-notification/dist/index.css" rel="stylesheet">
<!-- Init the plugin -->
<script>
Vue.use(VueToast);
</script>
```

### Browser support
* [Modern](http://browserl.ist/?q=defaults%2C+not+ie+%3E+0%2Cnot+ie_mob+%3E+0) browsers only

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js `>=6.10` and [yarn](https://yarnpkg.com) `>=1.x` pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser 

## Credits
* Buefy [Toast](https://buefy.github.io/documentation/toast) component

## License
[MIT](LICENSE.txt) License
