<template>
  <div class="wrapper">
    <app-header :back-link="`/${$route.params.language}`">
      {{ getlanguageByCode($route.params.language).displayName }}
    </app-header>
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
.cat {
  margin-bottom: 16px;
}
</style>
