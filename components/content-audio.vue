<template>
  <div class="audio">
    <div v-if="player" class="audio-controls">
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
    </div>
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
  height: 278px;
}

.audio-controls {
  padding-top: 64px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plyr--audio .plyr__controls {
  background-color: transparent;
}

.plyr--audio .plyr__controls input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  /* border: 1px solid #000000;
  height: 36px;
  width: 16px;
  background: #ffffff; */
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; Add cool effects to your sliders! */

  width: 36px;
  height: 36px;
  border-radius: 3px;

  background: transparent;
  border: 4px solid #114778;

  background-image: url('~assets/icons/audio-seek-handle.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
