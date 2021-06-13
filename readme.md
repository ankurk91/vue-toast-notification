# Vue Toast Notification

[![downloads](https://badgen.net/npm/dt/vue-toast-notification)](https://npm-stat.com/charts.html?package=vue-toast-notification&from=2019-11-01)
[![js-delivr](https://data.jsdelivr.com/v1/package/npm/vue-toast-notification/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-toast-notification)
[![npm-version](https://badgen.net/npm/v/vue-toast-notification)](https://www.npmjs.com/package/vue-toast-notification)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-toast-notification)](https://github.com/ankurk91/vue-toast-notification/tags)
[![build](https://github.com/ankurk91/vue-toast-notification/workflows/build/badge.svg)](https://github.com/ankurk91/vue-toast-notification/actions)
[![license](https://badgen.net/github/license/ankurk91/vue-toast-notification)](https://yarnpkg.com/en/package/vue-toast-notification)
![ts](https://badgen.net/badge/ready/TypeScript/blue)

Yet another Vue.js Toast notification plugin.

## [Demo](https://ankurk91.github.io/vue-toast-notification) or [JSFiddle](https://jsfiddle.net/ankurk91/ebakcs62/)

### Version matrix

| Vue.js version | Package version | Branch        |
| :---           | :---:           | ---:          | 
| 2.x            | 1.x             | [1.x](https://github.com/ankurk91/vue-toast-notification/tree/v1.x) |
| 3.x            | 2.x             | `master`          |

## Installation

```bash
# yarn
yarn add vue-toast-notification@^2.0

# npm
npm install vue-toast-notification@^2.0
```

## Usage

```js
import {createApp} from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp({}).mount('#app')
app.use(VueToast);

//Vue.$toast.open({/* options */});
let instance = app.$toast.open('You did it!');

// Force dismiss specific toast
instance.dismiss();
// Dismiss all opened toast immediately
app.$toast.clear();
```

## Available options

The API methods accepts these options:

| Attribute        | Type                | Default              | Description      |
| :---             | :---:               | :---:                | :---             |
|  message         | String              | --                   |  Message text/html (required)   |
|  type            | String              | `success`            |  One of `success`, `info`, `warning`, `error`, `default`  |
|  position        | String              | `bottom-right`       |  One of `top`, `bottom`, `top-right`, `bottom-right`,`top-left`, `bottom-left`  |
|  duration        | Number              | `3000`               |  Visibility duration in milliseconds, set to `0` to keep toast visible    |
|  dismissible     | Boolean             | `true`               |  Allow user dismiss by clicking    |
|  onClick         | Function            | --                   |  Do something when user clicks    |
|  onDismiss       | Function            | --                   |  Do something after toast gets dismissed    |
|  queue           | Boolean             | `false`              |  Wait for existing to dismiss before showing new     |
|  pauseOnHover    | Boolean             | `true`               |  Pause the timer when mouse on over a toast    |

## API methods

### `app.$toast.open(options)`

This is generic method, you can use this method to make any kind of toast.

```js
// Can accept a message as string and apply rest of options from defaults
app.$toast.open('Howdy!');

// Can accept an Object of options
app.$toast.open({
    message: 'Something went wrong!',
    type: 'error',
    // all of other options may go here
});
```

### `app.$toast.success(message,?options)`

There are some proxy methods to make it more readable.

```js
app.$toast.success('Profile saved.', {
    // optional options Object
})
```

### `app.$toast.error(message,?options)`

### `app.$toast.warning(message,?options)`

### `app.$toast.info(message,?options)`

### `app.$toast.default(message,?options)`

## Global options

You can set options for all the instances during plugin initialization

```js
app.use(VueToast, {
    // One of the options
    position: 'top'
})
```

Further you can override option when creating new instances

```js
app.$toast.success('Order placed.', {
    // override the global option
    position: 'bottom'
})
```

## Install in non-module environments (without webpack)

```html
<!-- Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-toast-notification@2"></script>
<link href="https://cdn.jsdelivr.net/npm/vue-toast-notification@2/dist/theme-sugar.css" rel="stylesheet">
<!-- Init the plugin -->
<script>
    const app = Vue.createApp({}).mount('#app')
    app.use(VueToast);
</script>
```

## Run examples on your localhost

* Clone this repo
* Make sure you have node-js `>=14.15` and [yarn](https://yarnpkg.com) `>=1.22` pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser

## Acknowledgements

* Buefy [Toast](https://buefy.org/documentation/toast) component

## License

[MIT](LICENSE.txt) License
