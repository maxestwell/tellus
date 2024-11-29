<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <header>
    <div>
      <TheTitle :title="headerTitle" />
    </div>
  </header>

  <div class="writing">
    <h1>What is Tellus?</h1>
    <p>
      Tellus began as an idea pitched by a University of Canberra academic during a study tour in
      Finland as part of a group university project.
    </p>
    <p>The idea stuck with me...</p>
    <p>
      It evolved into a curated audio archive of micro-interviews based on the 'Would you rather…?'
      concept, blending creativity and public engagement. The platform invites users to share their
      own responses for future editions, drawing on the Vox Pop tradition to explore a mix of
      thought-provoking, lighthearted, and reflective questions.
    </p>
    <p>HINT: click on the background of the main page to listen to the responses...</p>
  </div>
</template>

<style scoped>
.about {
  height: 100%;
  width: 100%;
}

.publication {
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
}

h1 {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.text {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 900,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  -webkit-text-stroke: 0.02rem #181818;
}

h1 {
  text-transform: uppercase;
}

h2,
h3,
h4,
h5,
h6 {
  text-transform: capitalize;
  width: fit-content;
  /* padding-bottom: 1em; */
}

p {
  font-family: 'adapter-mono-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 600,
    'slnt' -6,
    'ital' 1,
    'BORD' 300;
}
</style>
