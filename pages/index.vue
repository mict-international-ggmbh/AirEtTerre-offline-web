/* eslint-disable prettier/prettier */
<template>
  <div class="wrapper">
    <language-button
      v-for="language in languages"
      :key="language.slug"
      :to="`${language.code}`"
      class="lang"
      @play="play(`${translations[language.code].welcomeAudio}`)"
    >
      {{ translations[language.code].welcome }}
    </language-button>
    <vue-plyr
      ref="plyr"
      :options="options"
      :emit="['playing', 'pause', 'ended']"
    >
      <audio>
        <source :src="playerSrc" type="audio/mp3" />
      </audio>
    </vue-plyr>
    <header>
      <h1>Air et terre</h1>
    </header>
  </div>
</template>

<script>
import { languages, translations } from '@/configs'

export default {
  name: 'Index',

  data: () => ({
    languages,
    translations,
    player: undefined,
    playerSrc: undefined,
    options: {
      controls: [],
      loadSprite: false,
      iconUrl: '/plyr.svg'
    }
  }),

  mounted() {
    this.$nextTick(function () {
      this.player = this.$refs.plyr.player
    })
  },

  methods: {
    play(src) {
      console.log('play', src)
      console.log(this.player)
      this.playerSrc = src
      this.player.source = {
        type: 'audio',
        title: 'Example title',
        sources: [
          {
            src,
            type: 'audio/mp3'
          }
        ]
      }

      this.player.play()
    }
  }
}
</script>
<style scoped>
.wrapper {
  margin-top: 52px;
}

h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  /* or 129% */
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 7px #0c582e;
}

.lang {
  margin-bottom: 24px;
}
</style>
