/* eslint-disable prettier/prettier */
<template>
  <div class="wrapper">
    <div class="languages">
      <language-button
        v-for="language in languages"
        :key="language.slug"
        :to="`/${language.code}`"
        class="lang"
        @play="$refs.player.play(i18n[language.code].audio.welcome)"
      >
        {{ i18n[language.code].welcome }}
      </language-button>
      <audio-transcription-player ref="player" />
    </div>
    <header>
      <h1>Air et terre</h1>
    </header>
  </div>
</template>

<script>
import { languages, i18n } from '@/configs'

export default {
  name: 'Index',

  data: () => ({
    languages,
    i18n,
    audioTranscription: undefined
  })
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.languages {
  padding-top: 52px;
}

header {
  min-height: 238px;
  margin-left: -20px;
  margin-right: -20px;
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('~assets/startpage-bg-1.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: 140px;
  font-weight: 500;
  font-size: 44px;
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
