<template>
  <div class="wrapper">
    <header>
      <nuxt-link to="/">
        <img class="icon" :src="require(`~/assets/icons/chevron-left.svg`)" />
      </nuxt-link>
      <div>{{ $route.params.language }}</div>
    </header>
    <div class="categories">
      <category-button
        v-for="category in categories"
        :key="category.id"
        class="cat"
      >
        {{ category.id }}
      </category-button>
    </div>
  </div>
</template>

<script>
import { categories } from '@/configs'

export default {
  name: 'Content',

  validate({ params }) {
    let valid = false
    const languages = ['a', 'b', 'c']
    valid = languages.includes(params.language)
    return valid
  },

  data: () => ({
    categories
  })
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
