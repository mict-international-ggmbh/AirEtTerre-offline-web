<template>
  <vue-plyr ref="plyr" :options="options">
    <audio />
  </vue-plyr>
</template>

<script>
export default {
  name: 'AudioTranscriptionPlayer',

  data: () => ({
    player: undefined,
    options: {
      controls: [],
      loadSprite: false,
      iconUrl: require(`~/assets/plyr.svg`),
      blankVideo: require(`~/assets/blank.mp4`)
    }
  }),

  mounted() {
    this.$nextTick(function () {
      this.player = this.$refs.plyr.player
    })
  },

  beforeDestroy() {
    this.player.pause()
    this.player.media.src = ''
    this.player.destroy()
    if (window.stop !== undefined) {
      window.stop()
    } else if (document.execCommand !== undefined) {
      document.execCommand('Stop', false)
    }
  },

  methods: {
    play(src) {
      this.player.source = {
        type: 'audio',
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
