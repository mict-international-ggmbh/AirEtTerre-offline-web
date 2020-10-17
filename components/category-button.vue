<template>
  <div class="button">
    <audio-transcription-button
      class="audio-transcription"
      @click="$emit('play')"
    />
    <nuxt-link :to="to">
      <slot />
    </nuxt-link>
    <div
      class="bg-img"
      :style="{ 'background-image': `url(${backgroundUrl})` }"
    >
      <div class="bg-img-shade"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryButton',

  props: {
    to: {
      type: String,
      default: '/'
    },

    icon: {
      type: String,
      default: undefined
    },

    image: {
      type: String,
      default: undefined
    }
  },

  computed: {
    backgroundUrl() {
      return require(`~/assets/${this.image}.jpg`)
    }
  }
}
</script>

<style scoped>
.button {
  position: relative;
  z-index: 1;
  color: #fff;
  border-radius: 4px;
  height: 135px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
}

.bg-img {
  position: absolute;
  border-radius: 4px;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-img-shade {
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

a {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  flex: 1;
  z-index: 1;
  font-size: 24px;
  line-height: 26px;
  padding-left: 22px;
  /* identical to box height, or 108% */
  background-image: url('~assets/icons/chevron-right.svg');
  background-repeat: no-repeat;
  background-position: center right 24px;
  text-align: left;
}

.audio-transcription {
  width: 112px;
  height: 124px;
}

.icon {
  width: 30px;
  height: 27px;
}
</style>
