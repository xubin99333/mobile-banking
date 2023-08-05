import Vue from 'vue';
import { GoosePopupMixin } from './mixins/popup';

type ToastMessage = string | number;
type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
type ToastPosition = 'top' | 'middle' | 'bottom';
type ToastLoadingType = 'circular' | 'spinner';

export type ToastOptions = {
  icon?: string;
  type?: ToastType;
  mask?: boolean;
  message?: ToastMessage;
  onClose?: () => void;
  onOpened?: () => void;
  overlay?: boolean;
  duration?: number;
  position?: ToastPosition;
  className?: any;
  transition?: string;
  iconPrefix?: string;
  loadingType?: ToastLoadingType;
  forbidClick?: boolean;
  closeOnClick?: boolean;
  closeOnClickOverlay?: boolean;
  getContainer?: string | (() => Element);
};

export interface GooseToast extends Vue, GoosePopupMixin {
  type: ToastType;
  position: ToastPosition;
  loadingType: ToastLoadingType;
  forbidClick: boolean;
  message: ToastMessage;
  clear(): void;
}

export interface Toast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): GooseToast;
  loading(options?: ToastOptions | ToastMessage): GooseToast;
  success(options?: ToastOptions | ToastMessage): GooseToast;
  fail(options?: ToastOptions | ToastMessage): GooseToast;
  clear(all?: boolean): void;
  install(): void;
  setDefaultOptions(
    type: ToastType | ToastOptions,
    options?: ToastOptions
  ): void;
  resetDefaultOptions(options?: string): void;
  allowMultiple(allow: boolean): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast;
  }
}

export const Toast: Toast;
