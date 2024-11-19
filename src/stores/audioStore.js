// src/stores/audioStore.js
import { defineStore } from 'pinia'
import sound1 from '@/assets/recordings/archie.mp3'
import sound2 from '@/assets/recordings/grace.mp3'
import sound3 from '@/assets/recordings/polly.mp3'
import sound4 from '@/assets/recordings/tavi.mp3'
import sound5 from '@/assets/recordings/tim.mp3'

export const useAudioStore = defineStore('audio', {
  state: () => ({
    soundsGroup1: [
      { src: sound1, link: '/tellus/profile' },
      { src: sound2, link: '/tellus/profile' },
    ],
    soundsGroup2: [
      { src: sound3, link: '/tellus/profile' },
      { src: sound4, link: '/tellus/profile' },
      { src: sound5, link: '/tellus/profile' },
    ],
    audio: null,
    isPlaying: false,
    currentGroup: null,
    lastPlayedIndex: { 1: null, 2: null },
    currentSoundLink: null,
  }),
  actions: {
    togglePlayPause(group) {
      if (this.isPlaying && this.currentGroup === group) {
        this.stopSound()
      } else {
        this.playRandomSound(group)
      }
    },
    playRandomSound(group) {
      const sounds = group === 1 ? this.soundsGroup1 : this.soundsGroup2
      let randomIndex

      do {
        randomIndex = Math.floor(Math.random() * sounds.length)
      } while (randomIndex === this.lastPlayedIndex[group])

      this.lastPlayedIndex[group] = randomIndex

      this.stopSound()

      const selectedSound = sounds[randomIndex]
      this.audio = new Audio(selectedSound.src)
      this.audio.play()
      this.isPlaying = true
      this.currentGroup = group
      this.currentSoundLink = selectedSound.link

      this.audio.onended = () => {
        this.isPlaying = false
        this.currentSoundLink = null
        this.currentGroup = null
      }
    },
    stopSound() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
        this.isPlaying = false
        this.currentSoundLink = null
        this.currentGroup = null
      }
    },
  },
})
