# Upgrading

## From v0.1.0 to v0.2.0
* `onClose` prop has been renamed to `onClick`
* `onClick` prop, as name suggests, get triggered when toast gets dismissed by user
* `onClose` prop will only gets triggered when
    - toast gets dismissed by user interaction OR
    - toast gets auto dismissed after given timeout

## From v0.0.3 to v0.1.0
* Distribution CSS file name has been changed, in order to restore old behaviour, update your code as
```diff
- import 'vue-toast-notification/dist/index.css';
+ import 'vue-toast-notification/dist/theme-default.css';
```
