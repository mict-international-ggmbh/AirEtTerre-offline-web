/* eslint-disable prettier/prettier */
<template>
  <div class="wrapper">
    <language-button
      v-for="language in languages"
      :key="language.slug"
      :to="`${language.code}`"
      class="lang"
      @play="$refs.player.play(i18n[language.code].audio.welcome)"
    >
      {{ i18n[language.code].welcome }}
    </language-button>
    <audio-transcription-player ref="player" />
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
