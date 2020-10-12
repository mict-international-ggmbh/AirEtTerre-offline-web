<template>
  <div class="wrapper">
    <app-header>
      {{ getlanguageByCode($route.params.language).displayName }}
    </app-header>
    <div class="categories">
      <category-button
        v-for="category in categories"
        :key="category.id"
        :image="`${category.id}-button-bg`"
        :to="`${$route.params.language}/${category.id}`"
        class="cat"
      >
        <div class="cat-icon">
          <img :src="require(`~/assets/icons/${category.id}.svg`)" />
        </div>
      </category-button>

      <category-button
        image="information-button-bg"
        :to="`${$route.params.language}/information`"
        class="info"
      >
        <img
          class="cat-icon"
          :src="require(`~/assets/icons/information.svg`)"
        />
      </category-button>
    </div>
  </div>
</template>

<script>
import { categories, languages } from '@/configs'

export default {
  name: 'Categories',

  validate({ params }) {
    let valid = false
    valid = languages.find((language) => params.language === language.code)
    return valid
  },

  data: () => ({
    categories
  }),

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

.cat:nth-last-child(2) {
  margin-bottom: 64px;
}

.cat-icon {
  display: flex;
  width: 62px;
  height: 62px;
  float: right;
  margin-right: 62px;
  justify-content: center;
}
</style>
