<template>
  <div class="wrapper">
    <app-header :back-link="`/${$route.params.language}`">
      {{ getlanguageByCode($route.params.language).displayName }}
    </app-header>
    <div class="content">
      {{ content.title }}
      <template v-if="content.type === 'audio'">
        <content-audio
          :src="`/media/${$route.params.language}/${$route.params.category}/${content.src}`"
        />
      </template>
      <template v-if="content.type === 'video'">
        <content-video
          :src="`/media/${$route.params.language}/${$route.params.category}/${content.src}`"
        />
      </template>
      <div class="navigation">
        <div class="nav prev">
          <nuxt-link
            v-if="contentPosition > 0"
            :to="`/${$route.params.language}/${$route.params.category}/${contentPosition}`"
          >
            &lt;
          </nuxt-link>
        </div>
        <div class="position">
          {{ contentPosition + 1 }} / {{ contentLength }}
        </div>
        <div class="nav next">
          <nuxt-link
            v-if="contentPosition + 1 < contentLength"
            :to="`/${$route.params.language}/${$route.params.category}/${
              contentPosition + 2
            }`"
          >
            &gt;
          </nuxt-link>
        </div>
      </div>
    </div>
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

  async asyncData({ $content, params }) {
    let { content } = await $content(`${params.language}/content`).fetch()

    const contentPosition = params.slug - 1
    console.log('content-item', contentPosition)

    content = content.filter((item) => item.category === params.category)
    const contentLength = content.length

    console.log('Content', content)
    return {
      content: content[contentPosition],
      contentLength,
      contentPosition
    }
  },

  methods: {
    getlanguageByCode(code) {
      return languages.find((language) => code === language.code)
    }
  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  width: 60px;
}
</style>