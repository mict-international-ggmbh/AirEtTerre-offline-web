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
