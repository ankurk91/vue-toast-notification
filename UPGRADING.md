# Upgrading

## From v2.0 to v3.x

If you are using the package directly from a CDN, Then you need to use named exports now

```diff
- app.use(VueToast)
+ app.use(VueToast.ToastPlugin)
```

There is no breaking change if you are consuming the package through a module bundler like webpack.

## From 0.5.4 to 0.6.0

* `onClose` prop has been renamed to `onDismiss`
* `close()` method has been renamed to `dismiss()`

```diff
-toastInstance.close();
+toastInstance.dismiss();
```

* CSS class names has been renamed to follow BEM, see the
  diff [#37](https://github.com/ankurk91/vue-toast-notification/pull/37)

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
