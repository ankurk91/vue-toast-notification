# Changelog

### [3.1.0](https://github.com/ankurk91/vue-toast-notification/compare/3.0.4...3.1.0)

* Add `bootstrap` theme
* Introduce `$toast-icons-path` scss variable

### [3.0.4](https://github.com/ankurk91/vue-toast-notification/compare/3.0.3...3.0.4)

* Fix: issue [#72](https://github.com/ankurk91/vue-toast-notification/issues/72)

### [3.0.3](https://github.com/ankurk91/vue-toast-notification/compare/3.0.2...3.0.3)

* Fix: issue [#72](https://github.com/ankurk91/vue-toast-notification/issues/72)

### [3.0.2](https://github.com/ankurk91/vue-toast-notification/compare/3.0.1...3.0.2)

* Fix: issue [#69](https://github.com/ankurk91/vue-toast-notification/issues/69)

### [3.0.1](https://github.com/ankurk91/vue-toast-notification/compare/3.0.0...3.0.1)

* Add missing type for typescript usage, [#68](https://github.com/ankurk91/vue-toast-notification/pull/68)

### [3.0.0](https://github.com/ankurk91/vue-toast-notification/compare/2.0.1...3.0.0)

* Allow Composition API usage

```js
import {useToast} from "vue-toast-notification";
```

* (Breaking) Use named export in browser environment

```diff
- app.use(VueToast)
+ app.use(VueToast.ToastPlugin)
```

### [2.0.1](https://github.com/ankurk91/vue-toast-notification/compare/2.0.0...2.0.1)

* Fix: Composition API usage, #58

### [2.0.0](https://github.com/ankurk91/vue-toast-notification/compare/1.0.0...2.0.0)

* Drop support for Vue 2.x, add support for Vue 3.x
* Drop Internet Explorer support

### [0.6.2](https://github.com/ankurk91/vue-toast-notification/compare/0.6.1...0.6.2)

* Fix: SSR issue, #57

### [0.6.1](https://github.com/ankurk91/vue-toast-notification/compare/0.6.0...0.6.1)

* Add ability to keep toast opened, [#46](https://github.com/ankurk91/vue-toast-notification/pull/46)
* Chore: upgrade to webpack 5

### [0.6.0](https://github.com/ankurk91/vue-toast-notification/compare/0.5.4...0.6.0)

* Rename `close()` method to `dismiss()`, [#39](https://github.com/ankurk91/vue-toast-notification/pull/39)
* Rename `onClose` prop to `onDismiss`
* Using BEM naming convention in CSS classes

### [0.5.4](https://github.com/ankurk91/vue-toast-notification/compare/0.5.3...0.5.4)

* Fix: type definitions, [#30](https://github.com/ankurk91/vue-toast-notification/issues/30)

### [0.5.3](https://github.com/ankurk91/vue-toast-notification/compare/0.5.2...0.5.3)

* Fix: previous release

### [0.5.2](https://github.com/ankurk91/vue-toast-notification/compare/0.5.1...0.5.2)

* Fix: previous release

### [0.5.1](https://github.com/ankurk91/vue-toast-notification/compare/0.5.0...0.5.1)

* Add type definitions

### [0.5.0](https://github.com/ankurk91/vue-toast-notification/compare/0.4.1...0.5.0)

* Fix:
    - [#26](https://github.com/ankurk91/vue-toast-notification/issues/26)
    - [#27](https://github.com/ankurk91/vue-toast-notification/issues/27)
    - [#4](https://github.com/ankurk91/vue-toast-notification/issues/4)
* Change: :warning: CSS classes has been prefixed with `v-`, if you were overriding any css class then revisit your code

### [0.4.1](https://github.com/ankurk91/vue-toast-notification/compare/0.4.0...0.4.1)

* Fix: [#24](https://github.com/ankurk91/vue-toast-notification/issues/24)

### [0.4.0](https://github.com/ankurk91/vue-toast-notification/compare/0.3.0...0.4.0)

* Add: allow html in `message` prop
* Add: `pauseOnHover` prop, disabled by default

### [0.3.0](https://github.com/ankurk91/vue-toast-notification/compare/0.2.0...0.3.0)

* Fix: issue [#18](https://github.com/ankurk91/vue-toast-notification/issues/18)
* Remove: undocumented prop `container`

### 0.1.0

* Add a new color theme along with default, [#6](https://github.com/ankurk91/vue-toast-notification/pull/6)
* See [UPGRADING.md](UPGRADING.md) for migration instructions

### 0.0.3

* Add: method to close all toast at-once

### 0.0.2

* Fix: default value for `onClose` prop

### 0.0.1

* Initial release
