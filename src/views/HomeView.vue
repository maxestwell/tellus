<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import WindowTemplate from '../components/WindowTemplate.vue'
import Text from '../components/Text.vue'
import Random from '../components/Random.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <WindowTemplate />
  <Text />
  <Random class="random-container" />
</template>

<style scoped>
.random-container {
  position: fixed;
  flex: 1;
  /* display: flex; */
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
