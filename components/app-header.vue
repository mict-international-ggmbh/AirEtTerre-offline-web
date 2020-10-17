<template>
  <header>
    <nuxt-link :to="backLink">
      <img class="icon" :src="require(`~/assets/icons/chevron-left.svg`)" />
    </nuxt-link>
    <div class="info">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  props: {
    backLink: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 62px;
  align-items: center;
  margin-bottom: 16px;
}

header a {
  display: block;
  width: 26px;
  margin-left: -6px;
  margin-right: 18px;
  overflow: hidden;
}
header a img {
  display: block;
  width: 100%;
  height: 100%;
}

.info {
  display: flex;
  padding-left: 16px;
  margin-right: 0;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  font-size: 20px;
}
</style>
