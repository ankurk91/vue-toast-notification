<template>
  <div
    role="alert"
    class="custom-toast-example"
  >
    <span class="custom-toast-example__title">
      {{ title }}
    </span>
    <span class="custom-toast-example__description">
      {{ description }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'Custom Toast',
  props: {
    title: String,
    description: String,
  }
}
</script>
<style scoped>
.custom-toast-example {
  padding: 10px;
  margin: 10px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: lightcoral;
  border-radius: 10px;
}

.custom-toast-example__title {
  font-weight: bold;
  font-size: 18px;
}

.custom-toast-example__description {
  font-size: 15px;
}
</style>