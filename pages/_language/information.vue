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
    <div class="information">
      <nuxt-content :document="page" />
      <app-version class="version" />
    </div>
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

  async asyncData({ $content, params, error }) {
    const page = await $content('information').fetch()
    return {
      page
    }
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

.information {
  padding-top: 82px;
  text-align: left;
}

.version {
  font-size: 14px;
  text-align: right;
}
</style>
