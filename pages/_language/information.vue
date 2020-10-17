<template>
  <div class="wrapper">
    <app-header :back-link="`/${$route.params.language}`">
      {{ getlanguageByCode($route.params.language).displayName }}
    </app-header>
    <div class="categories">Information TBD</div>
  </div>
</template>

<script>
import { languages } from '@/configs'

export default {
  name: 'Categories',

  validate({ params }) {
    let valid = false
    valid = languages.find((language) => params.language === language.code)
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
.dark {
  stroke: black;
}
</style>
