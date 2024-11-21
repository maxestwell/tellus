<script setup>
import HoverEffect from '@/components/HoverEffect.vue'
</script>

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
      currentUserName: null,
      isHovered: false, // Step 1: Add hover state
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
      this.currentUserName = selectedSound.profile[0].userName

      if (selectedSound.src) {
        selectedSound.src().then((module) => {
          this.audio = new Audio(module.default)
          console.log('Playing sound:', module.default)
          this.audio
            .play()
            .then(() => {
              this.isPlaying = true
              console.log('isPlaying set to:', this.isPlaying)
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
        console.log('isPlaying set to:', this.isPlaying)
        this.currentSoundLink = null
      }
    },
  },
}
</script>

<template>
  <div
    class="random"
    :class="{ hovered: isHovered, playing: isPlaying }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <a class="button" @click="togglePlayPause">
      <div class="bcontent">
        <h1>Would you rather?!</h1>
        <h2>...lose a...</h2>
        <div class="image-grid">
          <img
            v-for="(sound, index) in sounds"
            :key="index"
            :src="`/tellus/images${sound.profile[0].profileImage}`"
            :alt="sound.profile[0].profileImageAlt"
            class="profile-image"
          />
        </div>
        <p class="status">{{ isPlaying ? 'Stop ⏹️' : 'Play ▶️' }}</p>
        <!-- Display link if a sound is playing -->
        <div class="sound-link-container">
          <div v-if="currentSoundLink" class="sound-link">
            <router-link :to="currentSoundLink">
              {{ currentUserName }}
            </router-link>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.image-grid {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* gap: 10px; */
  width: 100%;
}

.profile-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  /* border-radius: 50%; */
  /* border: 2px solid #000; */
}

.random {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* Full viewport height */
  /* transition: 0.3s ease; */
}

.random.playing h1,
.random.playing a,
.random.playing p {
  transition: color 0.4s;
}

.random.playing h1,
.random.playing a,
.random.playing p {
  /* background-color: #f0f0f0; */
  color: #000000;
  /* transition-duration: 0.4s; */
}

.random.playing {
  background-color: #04aa6d;
  color: #ff0000; /* Change text color to red when playing */
}

.choices {
  width: 100%;
  height: 100%;
}

.button {
  width: 100%;
  height: 100%;

  position: relative;

  background-color: none;
  color: #ffffff;
  border: 2px solid #000000;
  /* padding: 16px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  /* transition-duration: 0.4s; */
  cursor: pointer;
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
