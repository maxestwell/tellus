<script setup>
import GridParent from '../components/GridParent.vue'
</script>

<template>
  <div class="random">
    <div class="choices">
      <div class="option1" @click="playRandomSound(1)">
        <div class="addemoji">
          <GridParent />
        </div>
        <div class="emoji">🖐️</div>
      </div>
      <div class="option2" @click="playRandomSound(2)">
        <div class="addemoji">
          <GridParent />
        </div>
        <div class="emoji">🦶</div>
      </div>
    </div>
    <div class="stop-button" @click="stopSound" :class="{ disabled: !isPlaying }">Stop</div>

    <!-- Display link if a sound is playing -->
    <div v-if="currentSoundLink" class="sound-link">
      <a :href="currentSoundLink">Profile</a>
    </div>
  </div>
</template>

<script>
import sound1 from '@/assets/recordings/archie.mp3'
import sound2 from '@/assets/recordings/grace.mp3'
import sound3 from '@/assets/recordings/polly.mp3'
import sound4 from '@/assets/recordings/tavi.mp3'
import sound5 from '@/assets/recordings/tim.mp3'

export default {
  data() {
    return {
      soundsGroup1: [
        { src: sound1, link: '/profile' },
        { src: sound2, link: '/profile' },
      ],
      soundsGroup2: [
        { src: sound3, link: '/profile' },
        { src: sound4, link: '/profile' },
        { src: sound5, link: '/profile' },
      ],
      audio: null,
      isPlaying: false,
      lastPlayedIndex: { 1: null, 2: null }, // Track last played index for each group
      currentSoundLink: null, // Store the link for the currently playing sound
    }
  },
  methods: {
    playRandomSound(group) {
      // Choose the appropriate sound group
      const sounds = group === 1 ? this.soundsGroup1 : this.soundsGroup2
      let randomIndex

      // Ensure a new random sound is selected (not the same as last played)
      do {
        randomIndex = Math.floor(Math.random() * sounds.length)
      } while (randomIndex === this.lastPlayedIndex[group])

      // Update the last played index for this group
      this.lastPlayedIndex[group] = randomIndex

      // Stop any currently playing sound
      this.stopSound()

      // Get the selected sound and link
      const selectedSound = sounds[randomIndex]
      this.audio = new Audio(selectedSound.src)
      this.audio.play()
      this.isPlaying = true

      // Set the link for the currently playing sound
      this.currentSoundLink = selectedSound.link

      // Reset isPlaying when the audio finishes
      this.audio.onended = () => {
        this.isPlaying = false
        this.currentSoundLink = null // Hide link when audio ends
      }
    },
    stopSound() {
      // Pause and reset the current audio if it exists
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
        this.isPlaying = false
        this.currentSoundLink = null // Hide link when stopped
      }
    },
  },
}
</script>

<style scoped>
.random {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh; /* Full viewport height */
}

.addemoji {
  position: absolute;
}

.choices {
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
}

.choices div {
  cursor: pointer;
  transition: transform 0.2s;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.option1 {
  /* background-color: #ffc800; */
  border: 2px solid #000000;
}

.option2 {
  /* background-color: #28a745; */
  border: 2px solid #000000;
}

.emoji {
  font-size: 48px;
}

.choices div:hover {
  transform: scale(1.05);
}

.stop-button {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  background-color: #007bff;
  color: white;
  text-align: center;
  /* border-radius: 5px; */
  user-select: none;
}

.stop-button.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.sound-link {
  margin-top: 10px;
}
</style>
