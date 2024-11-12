<template>
  <div class="grid-container">
    <div v-for="(emoji, index) in emojis" :key="index" class="grid-item">
      <span class="emoji">{{ emoji }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicGrid',
  data() {
    return {
      emojis: [],
    }
  },
  methods: {
    addItem() {
      const randomEmoji = this.getRandomEmoji()
      this.emojis.push(randomEmoji)
    },
    getRandomEmoji() {
      const emojiRanges = [
        [0x1f600, 0x1f64f], // Emoticons
        // [0x1f300, 0x1f5ff], // Misc Symbols & Pictographs
        // [0x1f680, 0x1f6ff], // Transport & Map Symbols
        // [0x1f900, 0x1f9ff], // Supplemental Symbols & Pictographs
        // [0x1f1e6, 0x1f1ff], // Regional Indicator Symbols (Flags)
        // [0x2600, 0x26ff], // Miscellaneous Symbols
        // [0x2700, 0x27bf], // Dingbats
        // [0x1fa70, 0x1faff], // Symbols and Pictographs Extended-A
      ]

      const randomRange = emojiRanges[Math.floor(Math.random() * emojiRanges.length)]
      const randomCodePoint =
        Math.floor(Math.random() * (randomRange[1] - randomRange[0] + 1)) + randomRange[0]

      return String.fromCodePoint(randomCodePoint)
    },
  },
}
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  /* gap: calc(2vw / var(--items-per-row)); */
}
.grid-item {
  flex: 1 1 calc(100% / var(--items-per-row));
  max-width: calc(100% / var(--items-per-row));
  box-sizing: border-box;
  text-align: center;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* The size of the emoji adjusts with the number of items per row */
.emoji {
  font-size: calc(20vw / var(--items-per-row)); /* Dynamic sizing */
}
</style>
