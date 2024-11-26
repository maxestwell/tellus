<script setup>
import HoverEffect from '@/components/HoverEffect.vue'
import { ref } from 'vue'
import CustomModal from '@/components/CustomModal.vue' // Import CustomModal
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
      animationClass: '', // Add animation class state
      showModal: false, // Add state for modal visibility
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
          this.audio
            .play()
            .then(() => {
              this.isPlaying = true
              this.handleAudioPlay()
              this.audio.addEventListener('ended', this.resetState) // Add event listener
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
        this.handleAudioPause()
        this.audio.removeEventListener('ended', this.resetState) // Remove event listener
        this.currentSoundLink = null
      }
    },
    resetState() {
      this.isPlaying = false
      this.currentSoundLink = null
      this.currentUserName = null
      this.audio = null
    },
    handleAudioPlay() {
      this.animationClass = 'fade-in'
    },
    handleAudioPause() {
      this.animationClass = 'fade-out'
      setTimeout(() => {
        this.animationClass = '' // Clear the animation class
        this.currentSoundLink = null // Clear the link after the animation ends
      }) // Match the fade-out animation duration
    },
    handleBeforeLeave(el) {
      // Optional: Add any pre-leave logic
    },
    handleAfterLeave(el) {
      this.currentSoundLink = null // Ensure the link is removed after the fade-out
    },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<template>
  <div
    class="random"
    :class="{ hovered: isHovered, playing: isPlaying, 'not-playing': !isPlaying }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <a class="button" @click="togglePlayPause">
      <div class="bcontent">
        <div class="image-grid">
          <img
            v-for="(sound, index) in sounds"
            :key="index"
            :src="`/tellus/images${sound.profile[0].profileImage}`"
            :alt="sound.profile[0].profileImageAlt"
            class="profile-image"
          />
        </div>

        <!-- Display link if a sound is playing -->
        <div class="sound-link-container">
          <h1>
            <a>
              <router-link v-if="currentSoundLink" :to="currentSoundLink" :class="animationClass">
                {{ currentUserName }}
              </router-link>
            </a>
          </h1>
        </div>
      </div>
    </a>
  </div>
  <button class="open-modal-button" @click="openModal"><h1>?</h1></button>
  <CustomModal :visible="showModal" @close="closeModal" title="Help!!!">
    <template #content>
      <p>Click anywhere on screen</p>
      <p>Also click on the username!...</p>
    </template>
  </CustomModal>
</template>

<style scoped>
/* Profile Image Grid */

a {
  text-decoration: none;
  color: #ffffff;
}
.image-grid {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
}

.profile-image {
  width: 25px;
  height: 25px;
  object-fit: cover;
}

.random {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  transition: background-color 0.5s ease;
}

.random.playing {
  background-color: #0033ff;
}

.random.not-playing {
  background-color: none;
}

.button {
  width: 100%;
  height: 100%;
  position: relative;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
}

.bcontent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.open-modal-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 4em; /* Set width */
  height: 4em; /* Set height */
  padding: 0; /* Remove padding */
  border: none;
  border-radius: 50%; /* Make it a circle */
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.open-modal-button:hover {
  background-color: #0056b3;
}
</style>
