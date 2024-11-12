<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    shouldPlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      audio: new Audio(),
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      scrubberValue: 0, // New property to smoothly update scrubber
    }
  },
  watch: {
    shouldPlay(newVal) {
      if (!newVal && this.isPlaying) {
        this.audio.pause()
        this.isPlaying = false
      }
    },
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60)
      const seconds = Math.floor(this.currentTime % 60)
        .toString()
        .padStart(2, '0')
      return `${minutes}:${seconds}`
    },
  },
  methods: {
    togglePlayPause() {
      if (this.isPlaying) {
        this.audio.pause()
        this.isPlaying = false
      } else {
        this.$emit('play')
        this.audio.play()
        this.isPlaying = true
        this.updateScrubber() // Start updating scrubber smoothly
      }
    },
    seekAudio() {
      this.audio.currentTime = this.scrubberValue
      this.currentTime = this.scrubberValue
    },
    setVolume() {
      this.audio.volume = this.volume
    },
    updateScrubber() {
      if (this.isPlaying) {
        this.scrubberValue = this.audio.currentTime
        this.currentTime = this.audio.currentTime
        requestAnimationFrame(this.updateScrubber) // Continuously update scrubber
      }
    },
  },
  mounted() {
    this.audio.src = this.src
    this.audio.volume = this.volume

    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration
    })

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false
      this.currentTime = 0
      this.scrubberValue = 0
    })
  },
  beforeDestroy() {
    this.audio.pause()
    this.audio = null
  },
}
</script>

<template>
  <div class="audio-player">
    <button @click="togglePlayPause" class="play-pause">
      <span v-if="isPlaying">😀</span>
      <span v-else>🥲</span>
    </button>
    <input
      type="range"
      min="0"
      :max="duration"
      v-model="scrubberValue"
      @input="seekAudio"
      class="scrubber"
    />
    <span class="time">{{ formattedTime }}</span>
    <input
      type="range"
      min="0"
      max="1"
      step="0.1"
      v-model="volume"
      @input="setVolume"
      class="volume-control"
    />
  </div>
</template>

<style scoped>
.audio-player {
  display: flex;
  align-items: center;
  background-color: #282c34;
  padding: 10px 15px;
  border-radius: 8px;
  gap: 12px;
  color: #f1f1f1;
  font-family: Arial, sans-serif;
}

.play-pause {
  background: transparent;
  border: none;
  color: #f1f1f1;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s;
}
.play-pause:hover {
  transform: scale(1.2);
}

.scrubber {
  flex-grow: 1;
  width: 100px;
  background: #444;
  appearance: none;
  height: 5px;
  border-radius: 5px;
  outline: none;
  transition: width 0.1s linear; /* Smooths the scrubber movement */
}

.scrubber::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #f1f1f1;
  border-radius: 50%;
  cursor: pointer;
}

.volume-control {
  width: 80px;
  background: #444;
  appearance: none;
  height: 5px;
  border-radius: 5px;
  outline: none;
}

.volume-control::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #f1f1f1;
  border-radius: 50%;
  cursor: pointer;
}

.time {
  min-width: 50px;
  font-size: 14px;
  color: #f1f1f1;
}
</style>
