<template>
  <div class="wrapper">
    <app-header :back-link="`/${$route.params.language}`">
      <div class="header-category">
        {{ i18n[$route.params.language].information }}
      </div>
      <div class="cat-icon">
        <img :src="require(`~/assets/icons/information.svg`)" />
      </div>
    </app-header>
    <div class="categories">Information TBD</div>
  </div>
</template>

<script>
import { languages, i18n } from '@/configs'

export default {
  name: 'Categories',

  validate({ params }) {
    let valid = false
    valid = languages.find((language) => params.language === language.code)
    return valid
  },

  data: () => ({
    i18n
  }),

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
