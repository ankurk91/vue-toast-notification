# Vue Toast Notification

[![downloads](https://badgen.net/npm/dt/vue-toast-notification)](https://npm-stat.com/charts.html?package=vue-toast-notification&from=2019-11-01)
[![js-delivr](https://data.jsdelivr.com/v1/package/npm/vue-toast-notification/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-toast-notification)
[![npm-version](https://badgen.net/npm/v/vue-toast-notification)](https://www.npmjs.com/package/vue-toast-notification)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-toast-notification)](https://github.com/ankurk91/vue-toast-notification/tags)
[![build](https://github.com/ankurk91/vue-toast-notification/workflows/build/badge.svg)](https://github.com/ankurk91/vue-toast-notification/actions)
[![license](https://badgen.net/github/license/ankurk91/vue-toast-notification)](https://yarnpkg.com/en/package/vue-toast-notification)
![TypeScript](https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)

Yet another Vue.js Toast notification plugin.

## [Demo](https://ankurk91.github.io/vue-toast-notification) or [JSFiddle](https://jsfiddle.net/ankurk91/4kqhsavp/)

### Version matrix

| Vue.js version | Package version |                                                              Branch |
|:---------------|:---------------:|--------------------------------------------------------------------:| 
| 2.x            |       1.x       | [1.x](https://github.com/ankurk91/vue-toast-notification/tree/v1.x) |
| 3.x            |       3.x       |                                                              `main` |

## Installation

```bash
npm install vue-toast-notification@^3
```

## Usage

### Plugin usage

Install the plugin

```js
import {createApp} from 'vue';
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp({});
app.use(ToastPlugin);
app.mount('#app');
```

Then use in your components

```js
export default {
    mounted() {
        let instance = this.$toast.open('You did it!');

        // Force dismiss specific toast
        instance.dismiss();

        // Dismiss all opened toast immediately
        this.$toast.clear();
    }
}
```

### Composition API usage

```js
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();
let instance = $toast.success('You did it!');

// Force dismiss specific toast
instance.dismiss();

// Dismiss all opened toast immediately
$toast.clear();
```

## Available options

The API methods accepts these options:

| Attribute    |   Type   |    Default     | Description                                                                   |
|:-------------|:--------:|:--------------:|:------------------------------------------------------------------------------|
| message      |  String  |       --       | Message text/html (required)                                                  |
| type         |  String  |   `success`    | One of `success`, `info`, `warning`, `error`, `default`                       |
| position     |  String  | `bottom-right` | One of `top`, `bottom`, `top-right`, `bottom-right`,`top-left`, `bottom-left` |
| duration     |  Number  |     `3000`     | Visibility duration in milliseconds, set to `0` to keep toast visible         |
| dismissible  | Boolean  |     `true`     | Allow user dismiss by clicking                                                |
| onClick      | Function |       --       | Do something when user clicks                                                 |
| onDismiss    | Function |       --       | Do something after toast gets dismissed                                       |
| queue        | Boolean  |    `false`     | Wait for existing to dismiss before showing new                               |
| pauseOnHover | Boolean  |     `true`     | Pause the timer when mouse on over a toast                                    |

## API methods

### `this.$toast.open(options)`

This is generic method, you can use this method to make any kind of toast.

```js
// Can accept a message as string and apply rest of options from defaults
this.$toast.open('Howdy!');

// Can accept an Object of options
this.$toast.open({
    message: 'Something went wrong!',
    type: 'error',
    // all of other options may go here
});
```

### `this.$toast.success(message,?options)`

There are some proxy methods to make it more readable.

```js
this.$toast.success('Profile saved.', {
    // optional options Object
})
```

### `this.$toast.error(message,?options)`

### `this.$toast.warning(message,?options)`

### `this.$toast.info(message,?options)`

### `this.$toast.default(message,?options)`

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
this.$toast.success('Order placed.', {
    // override the global option
    position: 'bottom'
})
```

## Install in non-module environments (without webpack)

```html
<!-- Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-toast-notification@3"></script>
<link href="https://cdn.jsdelivr.net/npm/vue-toast-notification@3/dist/theme-sugar.css" rel="stylesheet">
<!-- Init the plugin -->
<script>
    const app = Vue.createApp({});
    app.use(VueToast.ToastPlugin);
    app.mount('#app');
</script>
```

## Run examples on your localhost

* Clone this repo
* Make sure you have node-js `>=18.16` and [pnpm](https://pnpm.io/) `>=8.3` pre-installed
* Install dependencies - `pnpm install`
* Run webpack dev server - `pnpm start`
* This should open the demo page in your default web browser

## Acknowledgements

* Buefy [Toast](https://buefy.org/documentation/toast) component

## License

[MIT](LICENSE.txt) License
