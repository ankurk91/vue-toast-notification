import {Vue, VueConstructor, ExtendedVue} from 'vue/types/vue'
import {PluginFunction} from 'vue'

export interface ToastComponent extends ExtendedVue<any, any, any, any, any> {
  close()
}

export type ToastPosition =
  'top-right'
  | 'top'
  | 'top-left'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'

export type ToastType = 'success' | 'info' | 'error' | 'warning' | 'default'

export interface ToastOptions {
  message: string,
  type?: ToastType | string,
  position?: ToastPosition,
  duration?: number,
  dismissible?: boolean,
  queue?: boolean,
  pauseOnHover?: boolean,
  onClick?: () => any,
  onClose?: () => any,
}

export interface ToastApi {
  open(message: string): ToastComponent

  open(options: ToastOptions): ToastComponent

  success(message: string, options?: ToastOptions): ToastComponent

  error(message: string, options?: ToastOptions): ToastComponent

  info(message: string, options?: ToastOptions): ToastComponent

  warning(message: string, options?: ToastOptions): ToastComponent

  default(message: string, options?: ToastOptions): ToastComponent

  clear()
}

declare class ToastPlugin {
  static install: PluginFunction<ToastOptions>
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $toast: ToastApi
  }

  interface Vue {
    $toast: ToastApi
  }
}

export default ToastPlugin
