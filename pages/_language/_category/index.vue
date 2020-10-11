<template>
  <div class="wrapper">
    <header>
      <nuxt-link to="/">
        <img class="icon" :src="require(`~/assets/icons/chevron-left.svg`)" />
      </nuxt-link>
      <div>{{ getlanguageByCode($route.params.language).displayName }}</div>
    </header>
    <div class="categories">CONTENT</div>
  </div>
</template>

<script>
import { categories, languages } from '@/configs'

export default {
  name: 'Content',

  validate({ params }) {
    let valid = false
    console.log('params', params)
    valid = languages.find((language) => params.language === language.code)
    if (!valid) return valid
    valid = categories.find((category) => params.category === category.id)

    return valid
  },

  methods: {
    getlanguageByCode(code) {
      return languages.find((language) => code === language.code)
    }
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

.cat {
  margin-bottom: 16px;
}
</style>
