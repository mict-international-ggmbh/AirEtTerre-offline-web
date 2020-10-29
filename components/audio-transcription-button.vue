<template>
  <button class="audio-transcription" @click="$emit('click')">
    <icon-audio-help />
  </button>
</template>

<script>
import IconAudioHelp from '~/assets/icons/audio-help.svg?inline'

export default {
  name: 'AudioTranscriptionButton',

  components: { IconAudioHelp }
}
</script>

<style scoped>
.audio-transcription {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
}
</style>
