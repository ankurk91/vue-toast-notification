<template>
  <transition
    :enter-active-class="transition.enter"
    :leave-active-class="transition.leave">
    <div
      role="alert"
      v-show="isActive"
      class="toast"
      :class="[`toast-${type}`, `is-${position}`]"
      @click="whenClicked">
      <div class="toast-icon"></div>
      <p class="toast-text" v-html="message"></p>
    </div>
  </transition>
</template>

<script>
  import {removeElement, HTMLElement} from "./helpers";
  import eventBus from './bus.js'

  export default {
    name: 'toast',
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'success'
      },
      position: {
        type: String,
        default: 'bottom-right',
      },
      duration: {
        type: Number,
        default: 3000
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      onClose: {
        type: Function,
        default: () => {
        }
      },
      onClick: {
        type: Function,
        default: () => {
        }
      },
      queue: Boolean,
    },
    data() {
      return {
        isActive: false,
        parentTop: null,
        parentBottom: null,
      }
    },
    beforeMount() {
      this.setupContainer()
    },
    mounted() {
      this.showNotice();
      eventBus.$on('toast.clear', this.close)
    },
    methods: {
      setupContainer() {
        this.parentTop = document.querySelector('.notices.is-top');
        this.parentBottom = document.querySelector('.notices.is-bottom');
        // No need to create them, they already exists
        if (this.parentTop && this.parentBottom) return;

        if (!this.parentTop) {
          this.parentTop = document.createElement('div');
          this.parentTop.className = 'notices is-top';
        }

        if (!this.parentBottom) {
          this.parentBottom = document.createElement('div');
          this.parentBottom.className = 'notices is-bottom'
        }

        const container = document.body;
        container.appendChild(this.parentTop);
        container.appendChild(this.parentBottom);
      },

      shouldQueue() {
        if (!this.queue) return false;

        return (
          this.parentTop.childElementCount > 0 ||
          this.parentBottom.childElementCount > 0
        )
      },

      close() {
        clearTimeout(this.timer);
        clearTimeout(this.queueTimer);
        this.isActive = false;

        // Timeout for the animation complete before destroying
        setTimeout(() => {
          this.onClose.apply(null, arguments);
          this.$destroy();
          removeElement(this.$el)
        }, 150)
      },

      showNotice() {
        if (this.shouldQueue()) {
          // Call recursively if should queue
          this.queueTimer = setTimeout(this.showNotice, 250);
          return
        }
        this.correctParent.insertAdjacentElement('afterbegin', this.$el);
        this.isActive = true;

        this.timer = setTimeout(this.close, this.duration)
      },

      whenClicked() {
        if (!this.dismissible) return;
        this.onClick.apply(null, arguments);
        this.close()
      }
    },
    computed: {
      correctParent() {
        switch (this.position) {
          case 'top-right':
          case 'top':
          case 'top-left':
            return this.parentTop;

          case 'bottom-right':
          case 'bottom':
          case 'bottom-left':
            return this.parentBottom;
        }
      },
      transition() {
        switch (this.position) {
          case 'top-right':
          case 'top':
          case 'top-left':
            return {
              enter: 'fadeInDown',
              leave: 'fadeOut'
            };
          case 'bottom-right':
          case 'bottom':
          case 'bottom-left':
            return {
              enter: 'fadeInUp',
              leave: 'fadeOut'
            }
        }
      },
    },
    beforeDestroy() {
      eventBus.$off('toast.clear', this.close)
    }
  }
</script>
