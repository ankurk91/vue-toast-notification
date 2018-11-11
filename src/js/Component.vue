<template>
  <transition
    :enter-active-class="transition.enter"
    :leave-active-class="transition.leave">
    <div
      role="alert"
      v-show="isActive"
      class="toast"
      :class="[type, position]">
      <p class="text">{{message}}</p>
      <div class="action"
           @click="onClick">
        <button><span aria-hidden="true">&times;</span></button>
      </div>
    </div>
  </transition>
</template>

<script>
  import {removeElement} from "./helpers";

  export default {
    name: 'toast',
    props: {
      indefinite: {
        type: Boolean,
      },
      onClose: {
        default: Function
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'success'
      },
      message: String,
      duration: {
        type: Number,
        default: 3000
      },
      queue: {
        type: Boolean,
      },
      position: {
        type: String,
        default: 'is-bottom-right',
      },
      container: String
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
      this.showNotice()
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

        const container = document.querySelector(this.container) || document.body;

        container.appendChild(this.parentTop);
        container.appendChild(this.parentBottom);

        if (this.newContainer) {
          this.parentTop.classList.add('has-custom-container');
          this.parentBottom.classList.add('has-custom-container')
        }
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
        this.isActive = false;

        // Timeout for the animation complete before destroying
        setTimeout(() => {
          this.$destroy();
          removeElement(this.$el)
        }, 150)
      },

      showNotice() {
        if (this.shouldQueue()) {
          // Call recursively if should queue
          setTimeout(() => this.showNotice(), 250);
          return
        }
        this.correctParent.insertAdjacentElement('afterbegin', this.$el);
        this.isActive = true;

        if (!this.indefinite) {
          this.timer = setTimeout(() => this.close(), this.duration)
        }
      },
      onClick() {
        this.onClose.apply(null, arguments);
        this.close()
      }
    },
    computed: {
      correctParent() {
        switch (this.position) {
          case 'is-top-right':
          case 'is-top':
          case 'is-top-left':
            return this.parentTop;

          case 'is-bottom-right':
          case 'is-bottom':
          case 'is-bottom-left':
            return this.parentBottom;
        }
      },
      transition() {
        switch (this.position) {
          case 'is-top-right':
          case 'is-top':
          case 'is-top-left':
            return {
              enter: 'fadeInDown',
              leave: 'fadeOut'
            };
          case 'is-bottom-right':
          case 'is-bottom':
          case 'is-bottom-left':
            return {
              enter: 'fadeInUp',
              leave: 'fadeOut'
            }
        }
      },
    },
  }
</script>
