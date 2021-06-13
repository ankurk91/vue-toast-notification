import {Plugin} from 'vue'

export interface ActiveToast {
  dismiss(): void
}

export type ToastPosition =
  'top-right'
  | 'top'
  | 'top-left'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'

export type ToastType = 'success' | 'info' | 'error' | 'warning' | 'default'

export interface ToastProps {
  message: string,
  type?: ToastType | string,
  position?: ToastPosition,
  duration?: number,
  dismissible?: boolean,
  queue?: boolean,
  pauseOnHover?: boolean,
  onClick?: () => any,
  onDismiss?: () => any,
}

export interface ToastPluginApi {
  open(message: string): ActiveToast

  open(options: ToastProps): ActiveToast

  success(message: string, options?: ToastProps): ActiveToast

  error(message: string, options?: ToastProps): ActiveToast

  info(message: string, options?: ToastProps): ActiveToast

  warning(message: string, options?: ToastProps): ActiveToast

  default(message: string, options?: ToastProps): ActiveToast

  clear(): void
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly $toast: ToastPluginApi;
  }
}

declare const ToastPlugin: Plugin

export default ToastPlugin
