<template>
  <div class="audio">
    <template v-if="player">
      <img
        v-if="!playing && !ended"
        src="~/assets/icons/content-audio-play.svg"
        @click="play"
      />
      <img
        v-if="playing"
        src="~/assets/icons/content-audio-pause.svg"
        @click="pause"
      />
      <img
        v-if="!playing && ended"
        src="~/assets/icons/content-audio-replay.svg"
        @click="replay"
      />
    </template>
    <vue-plyr
      ref="plyr"
      :options="options"
      :emit="['playing', 'pause', 'ended']"
      @playing="onPlay"
      @pause="onPause"
      @ended="onEnd"
    >
      <audio>
        <source :src="src" type="audio/mp3" />
      </audio>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: 'ContentAudio',

  props: {
    src: {
      type: String,
      default: undefined
    }
  },

  data: () => ({
    options: {
      controls: ['progress']
    },
    player: undefined,
    playing: false,
    ended: false
  }),

  mounted() {
    this.$nextTick(function () {
      this.player = this.$refs.plyr.player
    })
  },

  methods: {
    play() {
      this.player.play()
    },
    pause() {
      this.player.pause()
    },
    replay() {
      this.player.restart()
      this.play()
      this.ended = false
    },
    onPlay() {
      this.playing = true
    },
    onPause() {
      this.playing = false
    },
    onEnd() {
      this.ended = true
    }
  }
}
</script>

<style>
.audio {
  width: 100%;
  height: 278px;
  background-image: url('~assets/audio-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  color: #fff;
}
</style>
