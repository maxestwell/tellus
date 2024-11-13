<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'T'
})
</script>

<template>
  <header>
    <div class="title-container">
      <TheTitle :title="headerTitle" />
    </div>
    <TheNav />
  </header>
  <div class="about">
    <h2>@a_bit_intimidated</h2>
    <h3>bio</h3>
    <p>
      exploring the vast, digital unknown. Somewhere between the chaos of dial-up and the promise of
      something bigger.
    </p>
    <h3>stickers</h3>
    <img src="/src/assets/images/sticker.png" alt="sticker" />
  </div>
  <div class="profileimg"></div>
</template>

<style scoped>
.profileimg {
  background-image: url('/src/assets/images/cloudmtns.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Send the background image to the back */
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.about {
  position: relative; /* Ensure the about section is positioned above the background image */
  z-index: 1; /* Ensure the about section is above the background image */
}

h2 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  font-size: 1.5rem;
  margin: 0;
}
</style>
