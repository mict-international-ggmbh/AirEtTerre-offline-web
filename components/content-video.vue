<template>
  <div class="video">
    <vue-plyr
      ref="plyr"
      :options="options"
      :emit="['playing', 'pause', 'ended']"
      @playing="onPlay"
      @pause="onPause"
      @ended="onEnd"
    >
      <video>
        <source :src="src" type="video/mp4" size="100%" />
      </video>
    </vue-plyr>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ContentVideo',

  props: {
    src: {
      type: String,
      default: undefined
    }
  },

  data: () => ({
    options: {
      // controls: ['progress'],
      loadSprite: false,
      iconUrl: '/plyr.svg',
      blankVideo: '/blank.mp4'
    },
    player: undefined,
    playing: false,
    ended: false
  }),

  computed: {
    ...mapState(['currentlyPlaying'])
  },

  watch: {
    currentlyPlaying(nv, ov) {
      if (nv && nv !== this.src && this.playing) {
        this.player.pause()
      }
    }
  },

  mounted() {
    this.$nextTick(function () {
      this.player = this.$refs.plyr.player
    })
  },

  methods: {
    ...mapMutations(['setCurrentlyPlaying']),

    onPlay() {
      this.playing = true
      this.setCurrentlyPlaying(this.src)
    },
    onPause() {
      this.playing = false
      this.setCurrentlyPlaying(undefined)
    },
    onEnd() {
      this.ended = true
    }
  }
}
</script>

<style>
.video {
  width: 100%;
  height: auto;
  background-image: url('~assets/audio-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: #fff;
}
</style>
