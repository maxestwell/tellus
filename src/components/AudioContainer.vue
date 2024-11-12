<script>
import AudioPlayer from './AudioPlayer.vue'
import audioFile1 from '@/assets/recordings/archie.mp3'
import audioFile2 from '@/assets/recordings/grace.mp3'
import audioFile3 from '@/assets/recordings/polly.mp3'
import audioFile4 from '@/assets/recordings/tavi.mp3'
import audioFile5 from '@/assets/recordings/tim.mp3'

import sound1 from '@/assets/recordings/archie.mp3'
import sound2 from '@/assets/recordings/grace.mp3'
import sound3 from '@/assets/recordings/polly.mp3'
import sound4 from '@/assets/recordings/tavi.mp3'
import sound5 from '@/assets/recordings/tim.mp3'

export default {
  components: {
    AudioPlayer,
  },
  data() {
    return {
      audioFiles: [
        { src: audioFile1, title: 'Archie' },
        { src: audioFile2, title: 'Grace' },
        { src: audioFile3, title: 'Polly' },
        { src: audioFile4, title: 'Tavi' },
        { src: audioFile5, title: 'Tim' },
      ],
      currentPlayingIndex: null,
    }
  },
  methods: {
    handlePlay(index) {
      this.currentPlayingIndex = index
    },
  },
}
</script>

<template>
  <div>
    <h1>My Audio Players</h1>
    <div v-for="(audioFile, index) in audioFiles" :key="index">
      <h2>{{ audioFile.title }}</h2>
      <AudioPlayer
        :src="audioFile.src"
        :shouldPlay="currentPlayingIndex === index"
        @play="handlePlay(index)"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
