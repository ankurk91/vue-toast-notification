<template>
  <transition
    :enter-active-class="transition.enter"
    :leave-active-class="transition.leave">
    <div
      role="alert"
      v-show="isActive"
      class="vt__item"
      :class="[`vt__item--${type}`, `vt__item--${position}`]"
      @mouseover="toggleTimer(true)"
      @mouseleave="toggleTimer(false)"
      @click="whenClicked">
      <div class="vt__icon"></div>
      <p class="vt__text" v-html="message"></p>
    </div>
  </transition>
</template>

<script>
  import {removeElement} from './helpers.js';
  import Timer from "./timer.js";
  import Positions from './positions.js'
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
        default: Positions.BOTTOM_RIGHT,
        validator(value) {
          return Object.values(Positions).includes(value)
        }
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
      pauseOnHover: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        isActive: false,
        parentTop: null,
        parentBottom: null,
        isHovered: false,
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
        this.parentTop = document.querySelector('.vt__container.vt__item--top');
        this.parentBottom = document.querySelector('.vt__container.vt__item--bottom');
        // No need to create them, they already exists
        if (this.parentTop && this.parentBottom) return;

        if (!this.parentTop) {
          this.parentTop = document.createElement('div');
          this.parentTop.className = 'vt__container vt__item--top';
        }

        if (!this.parentBottom) {
          this.parentBottom = document.createElement('div');
          this.parentBottom.className = 'vt__container vt__item--bottom'
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
        this.timer.stop();
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

        this.timer = new Timer(this.close, this.duration);
      },

      whenClicked() {
        if (!this.dismissible) return;
        this.onClick.apply(null, arguments);
        this.close()
      },
      toggleTimer(newVal) {
        if (!this.pauseOnHover) return;
        newVal ? this.timer.pause() : this.timer.resume();
      }
    },
    computed: {
      correctParent() {
        switch (this.position) {
          case Positions.TOP:
          case Positions.TOP_RIGHT:
          case Positions.TOP_LEFT:
            return this.parentTop;

          case Positions.BOTTOM:
          case Positions.BOTTOM_RIGHT:
          case Positions.BOTTOM_LEFT:
            return this.parentBottom;
        }
      },
      transition() {
        switch (this.position) {
          case Positions.TOP:
          case Positions.TOP_RIGHT:
          case Positions.TOP_LEFT:
            return {
              enter: 'fadeInDown',
              leave: 'fadeOut'
            };

          case Positions.BOTTOM:
          case Positions.BOTTOM_RIGHT:
          case Positions.BOTTOM_LEFT:
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
