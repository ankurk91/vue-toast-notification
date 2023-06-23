<template>
  <div
    role="alert"
    :class="['v-toast__item', `v-toast__item--${type}`]"
  >
    <div class="v-toast__icon"></div>
    <p class="v-toast__text" v-html="message"></p>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'
    },
  },
})
</script>
