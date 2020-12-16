<template>
  <transition name="loading">
    <div v-if="loading" class="loading-page">
      <loading-spinner color="#0c582e" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',

  data: () => ({
    loading: false
  }),

  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 100;
}

.loading-enter-active,
.loading-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}
</style>
