export const state = () => ({
  currentlyPlaying: undefined
})

export const mutations = {
  setCurrentlyPlaying(state, src) {
    state.currentlyPlaying = src
  }
}
