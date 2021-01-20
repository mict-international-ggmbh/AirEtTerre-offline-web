<template>
  <div class="wrapper">
    <app-header>
      {{ getlanguageByCode($route.params.language).displayName }}
    </app-header>
    <div class="categories">
      <template v-for="category in categories">
        <category-button
          v-if="availableCategories.includes(category.id)"
          :key="category.id"
          :image="`${category.id}-button-bg`"
          :to="`/${$route.params.language}/${category.id}/1`"
          class="cat"
          @play="
            $refs.player.play(i18n[$route.params.language].audio[category.id])
          "
        >
          <category-icon class="cat-icon" :category-id="category.id" />
        </category-button>
      </template>

      <category-button
        image="information-button-bg"
        :to="`${$route.params.language}/information`"
        class="info"
        @play="
          $refs.player.play(i18n[$route.params.language].audio.information)
        "
      >
        <div class="cat-icon">
          <img
            style="width: 32px"
            :src="require(`~/assets/icons/information.svg`)"
          />
        </div>
      </category-button>
    </div>
    <audio-transcription-player ref="player" />
  </div>
</template>

<script>
import { categories, languages, i18n } from '@/configs'

export default {
  name: 'Categories',

  validate({ params }) {
    let valid = false
    valid = languages.find((language) => params.language === language.code)
    return valid
  },

  async asyncData({ $content, params }) {
    const { content } = await $content(`${params.language}/content`).fetch()

    const availableCategories = content.reduce((accumulator, currentValue) => {
      const categories = !accumulator.includes(currentValue.category)
        ? [...accumulator, currentValue.category]
        : accumulator

      return categories
    }, [])
    return {
      availableCategories,
      content
    }
  },

  data: () => ({
    categories,
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
.categories {
  margin: 0 -20px 0 -20px;
  padding: 82px 20px 64px 20px;
  background-color: #edfff1;
}

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
