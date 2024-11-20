<script>
import soundsData from '@/assets/data/sounds.json'

const audioFiles = import.meta.glob('@/assets/recordings/*.mp3')

export default {
  data() {
    return {
      sounds: [],
      audio: null,
      isPlaying: false,
      lastPlayedIndex: null,
      currentSoundLink: null,
    }
  },
  created() {
    this.sounds = soundsData.map((sound) => {
      const audioModule = audioFiles[`/src/assets/recordings/${sound.src}`]
      if (audioModule) {
        return { ...sound, src: audioModule } // Store function
      } else {
        console.warn(`Audio file not found for ${sound.src}`)
        return { ...sound, src: null }
      }
    })
  },
  methods: {
    togglePlayPause() {
      if (this.isPlaying) {
        this.stopSound()
      } else {
        this.playRandomSound()
      }
    },
    playRandomSound() {
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * this.sounds.length)
      } while (randomIndex === this.lastPlayedIndex)

      const selectedSound = this.sounds[randomIndex]
      this.lastPlayedIndex = randomIndex
      this.currentSoundLink = selectedSound.link

      if (selectedSound.src) {
        selectedSound.src().then((module) => {
          this.audio = new Audio(module.default)
          console.log('Playing sound:', module.default)
          this.audio
            .play()
            .then(() => {
              this.isPlaying = true
            })
            .catch((error) => {
              console.error('Error playing sound:', error)
            })
        })
      } else {
        console.error('No audio source found for:', selectedSound)
      }
    },
    stopSound() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
        this.isPlaying = false
        this.currentSoundLink = null
      }
    },
  },
}
</script>

<template>
  <div class="random">
    <h1>Would you rather?!...</h1>
    <h2>...lose a...</h2>
    <a class="button" @click="togglePlayPause">
      <div class="bcontent">
        <!-- <p class="choice"></p> -->
        <p class="status">{{ isPlaying ? 'Stop ⏹️' : 'Play ▶️' }}</p>
        <!-- Display link if a sound is playing -->
        <div class="sound-link-container">
          <div v-if="currentSoundLink" class="sound-link">
            <router-link :to="currentSoundLink">Profile</router-link>
          </div>
        </div>
      </div>
    </a>
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

.choices {
  width: 100%;
  height: 100%;
}

.button {
  width: 100%;
  height: 100%;

  background-color: white;
  color: black;
  border: 2px solid #000000;
  /* padding: 16px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button:hover {
  background-color: #04aa6d;
  color: white;
}

.bcontent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.choice {
  font-size: 48px;
}

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
  user-select: none;
}

.stop-button.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.sound-link-container {
  position: relative;
}

.sound-link {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
