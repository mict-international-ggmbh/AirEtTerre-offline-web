<template>
  <div class="wrapper">
    <header>
      <nuxt-link to="/">
        <img class="icon" :src="require(`~/assets/icons/chevron-left.svg`)" />
      </nuxt-link>
    </header>
    <div>Say hello to:</div>
  </div>
</template>

<script>
export default {
  name: 'Content',

  validate({ params }) {
    let valid = false
    const languages = ['a', 'b', 'c']
    valid = languages.includes(params.language)
    return valid
  }
}
</script>

<style scoped>
header {
  display: flex;
  padding: 8px;
  height: 62px;
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
</style>
