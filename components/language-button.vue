<template>
  <div class="button">
    <audio-transcription-button
      class="audio-transcription#"
      @click="$emit('play')"
    />
    <nuxt-link :to="to">
      <slot />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageButton',

  props: {
    to: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
.button {
  color: #fff;
  background: #106b39;
  border-radius: 4px;
  /* max-width: 320px; */
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
}

a {
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;
  font-size: 24px;
  line-height: 26px;
  padding-left: 22px;
  /* identical to box height, or 108% */
  background-image: url('~assets/icons/chevron-right.svg?data');
  background-repeat: no-repeat;
  background-position: center right 24px;
  text-align: left;
}

.audio-transcription {
  width: 56px;
  height: 56px;
}

.icon {
  width: 100%;
  height: 100%;
}
</style>
