<template>
  <div class="intro-container" @click="handleClick">
    <span class="typed-text">{{ currentText }}</span>
    <span v-if="showCursor" class="cursor">|</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phrases: ['Hi there!', 'Would you rather', 'lose a', 'hand', 'or a', 'foot?'],
      currentText: '',
      showCursor: true,
      currentPhraseIndex: 0,
      typingSpeed: 100, // Typing speed in ms
    }
  },
  methods: {
    typeText() {
      const phrase = this.phrases[this.currentPhraseIndex]
      this.currentText = '' // Reset the text for typing

      let charIndex = 0

      const interval = setInterval(() => {
        if (charIndex < phrase.length) {
          this.currentText += phrase[charIndex]
          charIndex++
        } else {
          clearInterval(interval)
        }
      }, this.typingSpeed)
    },
    handleClick() {
      // Move to the next phrase when clicked
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length
      this.typeText()
    },
  },
  mounted() {
    this.typeText() // Start the typing effect on mount

    // // Make the cursor blink
    // setInterval(() => {
    //   this.showCursor = !this.showCursor
    // }, 500)
  },
}
</script>

<style scoped>
.typed-text {
  white-space: pre;
}

.cursor {
  display: inline-block;
  animation: blink 1s steps(2) infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
