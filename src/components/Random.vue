<script setup>
import GridParent from '../components/GridParent.vue'
</script>

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
      currentGroup: null, // Track the current playing group
    }
  },
  methods: {
    togglePlayPause(group) {
      if (this.isPlaying && this.currentGroup === group) {
        this.stopSound()
      } else {
        this.playRandomSound(group)
      }
    },
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
      this.currentGroup = group

      // Set the link for the currently playing sound
      this.currentSoundLink = selectedSound.link

      // Reset isPlaying when the audio finishes
      this.audio.onended = () => {
        this.isPlaying = false
        this.currentSoundLink = null // Hide link when audio ends
        this.currentGroup = null
      }
    },
    stopSound() {
      // Pause and reset the current audio if it exists
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
        this.isPlaying = false
        this.currentSoundLink = null // Hide link when stopped
        this.currentGroup = null
      }
    },
  },
}
</script>

<template>
  <div class="random">
    <div class="choices">
      <a class="button button1" @click="togglePlayPause(1)">
        <!-- <div class="addemoji">
          <GridParent />
        </div> -->
        <div class="bcontent">
          <div class="emoji">🖐️</div>
          <div class="status">{{ isPlaying && currentGroup === 1 ? 'Pause' : 'Play' }}</div>
        </div>
      </a>

      <div class="bcontent">
        <h2>I'd rather loose a...</h2>
      </div>
      <a class="button button2" @click="togglePlayPause(2)">
        <!-- <div class="addemoji">
          <GridParent />
        </div> -->
        <div class="bcontent">
          <div class="emoji">🦶</div>
          <div class="status">{{ isPlaying && currentGroup === 2 ? 'Pause' : 'Play' }}</div>
        </div>
      </a>
    </div>

    <!-- Display link if a sound is playing -->
    <div v-if="currentSoundLink" class="sound-link">
      <router-link :to="currentSoundLink">Profile</router-link>
    </div>
  </div>
</template>

<style scoped>
.random {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* Full viewport height */
}

.addemoji {
  position: absolute;
}

.choices {
  display: grid;
  grid-template-rows: 4fr 1fr 4fr;
  gap: 1em;
  width: 100%;
  height: 100%;
}

/* .choices div {
  cursor: pointer;
  transition: transform 0.2s;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

.button {
  background-color: #04aa6d; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #000000;
}

.button1:hover {
  background-color: #04aa6d;
  color: white;
}

.button2 {
  background-color: white;
  color: black;
  border: 2px solid #000000;
}

.button2:hover {
  background-color: #008cba;
  color: white;
}

.bcontent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.emoji {
  font-size: 48px;
}

/* .choices div:hover {
  transform: scale(1.05);
} */

.stop-button {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 900,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  background-color: #f2f2f2;
  color: black;
  text-align: center;
  /* border-radius: 5px; */
  user-select: none;
}

.stop-button.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.sound-link {
  margin-top: 10px;
}
</style>
