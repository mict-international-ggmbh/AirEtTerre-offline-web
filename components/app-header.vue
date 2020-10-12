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
  padding: 8px;
  height: 62px;
  align-items: center;
}

header a {
  display: block;
  width: 46px;
  overflow: hidden;
}
header a img {
  display: block;
  width: 100%;
  height: 100%;
}

.info {
  display: flex;
  margin-right: 46px;
  justify-content: center;
  text-align: center;
  flex: 1;
}
</style>
