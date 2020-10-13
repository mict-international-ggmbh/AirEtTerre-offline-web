<template>
  <div class="wrapper">
    <app-header :back-link="`/${$route.params.language}`">
      {{ getlanguageByCode($route.params.language).displayName }}
    </app-header>
    <div class="content">
      <hooper
        ref="gallery"
        :wheel-control="false"
        :mouse-drag="false"
        :touch-drag="false"
      >
        <hooper-slide v-for="(part, index) in content" :key="index">
          {{ part.title }}
          <template v-if="part.type === 'audio'">
            <content-audio
              :src="`/media/${$route.params.language}/${$route.params.category}/${part.src}`"
            />
          </template>
          <template v-if="part.type === 'video'">
            <content-video
              :src="`/media/${$route.params.language}/${$route.params.category}/${part.src}`"
            />
          </template>
        </hooper-slide>
        <template slot="hooper-addons">
          <hooper-navigation />
          <hooper-pagination mode="fraction" />
        </template>
      </hooper>
    </div>
  </div>
</template>

<script>
import { categories, languages } from '@/configs'

import {
  Hooper,
  Slide as HooperSlide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'Content',

  components: {
    Hooper,
    HooperSlide,
    HooperNavigation,
    HooperPagination
  },

  validate({ params }) {
    let valid = false
    console.log('params', params)
    valid = languages.find((language) => params.language === language.code)
    if (!valid) return valid
    valid = categories.find((category) => params.category === category.id)

    return valid
  },

  async asyncData({ $content, params }) {
    const { content } = await $content(
      `${params.language}/${params.category}`
    ).fetch()

    console.log('Content', content)
    return {
      content
    }
  },

  methods: {
    getlanguageByCode(code) {
      return languages.find((language) => code === language.code)
    }
  }
}
</script>

<style>
.hooper {
  height: auto;
}

.hooper-slide:focus,
.hooper-track:focus,
.hooper-list:focus,
.hooper:focus {
  outline: none;
}

.hooper-navigation button {
  outline: none;
}

.hooper-pagination {
  bottom: -60px;
}
.hooper-indicator {
  /* outline: none;
  width: 4px;
  height: 4px;
  border-radius: 45px;
  margin: 0 12px 0 0;
  background-color: #c8c8ca;
  &.is-active {
    background-color: #333;
  } */
}

.hooper-prev {
  top: auto;
  bottom: -98px;
}
.hooper-next {
  top: auto;
  bottom: -98px;
}
</style>
