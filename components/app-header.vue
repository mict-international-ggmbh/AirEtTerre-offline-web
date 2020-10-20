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
  position: fixed;
  display: flex;
  width: 100%;
  height: 62px;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0 0 0 20px;
  align-items: center;
  background-image: url('~assets/header-bg-decoration.png');
  background-repeat: no-repeat;
  background-position: right top;
  background-color: #fff;
  z-index: 10;
}

header a {
  display: block;
  width: 26px;
  margin-left: -6px;
  margin-right: 24px;
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
  font-size: 24px;
}
</style>
