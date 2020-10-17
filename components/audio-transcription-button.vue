<template>
  <div class="audio-transcription" @click="$emit('click')">
    <img class="icon" :src="require(`~/assets/icons/audio-help.svg`)" />
  </div>
</template>

<script>
export default {
  name: 'AudioTranscriptionButton'
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
