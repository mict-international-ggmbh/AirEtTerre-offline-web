<template>
  <div class="button">
    <div class="audio-transcription" @click="playTranscription">
      <img class="icon" :src="require(`~/assets/icons/audio-help.svg`)" />
    </div>
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
  },

  methods: {
    playTranscription(e) {
      e.preventDefault()
      console.log('transcription')
      this.$emit('play')
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
  /* max-width: 320px; */
  height: 135px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
}

.bg-img {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-img-shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

a {
  display: block;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 124px;
  border-radius: 2px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
}

.icon {
  width: 30px;
  height: 27px;
}
</style>
