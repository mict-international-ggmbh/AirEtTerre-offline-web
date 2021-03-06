<template>
  <div v-touch:swipe="swipeHandler" class="wrapper">
    <app-header class="header" :back-link="`/${$route.params.language}`">
      <div class="header-category">
        {{ i18n[$route.params.language][$route.params.category] }}
      </div>
      <category-icon class="cat-icon" :category-id="$route.params.category" />
    </app-header>
    <div class="content" :class="[`swipe-${swipeDir}`]">
      <div class="content-header">
        <div class="media-type">
          <img :src="require(`~/assets/icons/${content.type}.svg?data`)" />
        </div>
        <h1>
          {{ content.title }}
        </h1>
        <div class="download">
          <a :href="`${content.src}`" download>
            <img :src="require(`~/assets/icons/download.svg?data`)" />
          </a>
        </div>
      </div>
      <template v-if="content.type === 'audio'">
        <content-audio :src="`${content.src}`" />
      </template>
      <template v-if="content.type === 'video'">
        <content-video :src="`${content.src}`" />
      </template>
    </div>
    <div class="navigation">
      <div class="nav prev" :class="{ disabled: !hasPrev }">
        <nuxt-link
          v-if="hasPrev"
          ref="prev"
          :to="`/${$route.params.language}/${$route.params.category}/${contentPosition}`"
        >
          <img
            class="icon nav-icon"
            :src="require(`~/assets/icons/chevron-left.svg?data`)"
          />
        </nuxt-link>
        <img
          v-else
          class="icon nav-icon"
          :src="require(`~/assets/icons/chevron-left.svg?data`)"
        />
      </div>
      <div class="position">
        {{ contentPosition + 1 }} / {{ contentLength }}
      </div>
      <div class="nav next" :class="{ disabled: !hasNext }">
        <nuxt-link
          v-if="hasNext"
          ref="next"
          :to="`/${$route.params.language}/${$route.params.category}/${
            contentPosition + 2
          }`"
        >
          <img
            class="icon nav-icon"
            :src="require(`~/assets/icons/chevron-left.svg?data`)"
          />
        </nuxt-link>
        <img
          v-else
          class="icon nav-icon"
          :src="require(`~/assets/icons/chevron-left.svg?data`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { categories, languages, i18n } from '@/configs'

export default {
  name: 'Content',

  async asyncData({ $content, params }) {
    let { content } = await $content(`${params.language}/content`).fetch()

    const contentPosition = params.slug - 1

    content = content.filter((item) => item.category === params.category)
    const contentLength = content.length

    return {
      content: content[contentPosition],
      contentLength,
      contentPosition
    }
  },

  data: () => ({
    i18n,
    swipeDir: undefined
  }),

  computed: {
    hasNext() {
      return this.contentPosition + 1 < this.contentLength
    },

    hasPrev() {
      return this.contentPosition > 0
    }
  },

  validate({ params }) {
    let valid = false

    valid = languages.find((language) => params.language === language.code)
    if (!valid) return valid
    valid = categories.find((category) => params.category === category.id)

    return valid
  },

  methods: {
    getlanguageByCode(code) {
      return languages.find((language) => code === language.code)
    },

    swipeHandler(direction) {
      switch (direction) {
        case 'right':
          if (this.hasPrev) {
            this.swipeDir = direction
            setTimeout(() => {
              this.$refs.prev.$el.click()
            }, 200)
          }
          break
        case 'left':
          if (this.hasNext) {
            this.swipeDir = direction
            setTimeout(() => {
              this.$refs.next.$el.click()
            }, 200)
          }
          break
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  flex: 1;
}

.content {
  padding-top: 82px;
  transition: all 0.1s ease-in;
}
.content.swipe-left {
  transform: translateX(-200px);
  opacity: 0;
}
.content.swipe-right {
  transform: translateX(200px);
  opacity: 0;
}

.navigation {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px 0 20px;
  background-color: rgba(255, 255, 255, 0.5);
}

.nav.next img {
  transform: rotate(180deg);
}

.nav.disabled img {
  opacity: 0.2;
}

.content-header {
  min-height: 98px;
  display: flex;
  text-align: left;
}

.content-header h1 {
  font-size: 18px;
  flex: 1;
}

.media-type {
  width: 54px;
  min-width: 54px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2px;
}
.download {
  width: 54px;
  min-width: 54px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 2px;
}

.nav-icon {
  display: block;
  min-width: 26px;
  height: auto;
}
</style>
