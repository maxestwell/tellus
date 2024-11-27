<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import Intro from '../components/Intro.vue'
import Text from '../components/Text.vue'
import WindowTemplate from '../components/WindowTemplate.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <div class="views">
    <div class="intro">
      <WindowTemplate />
      <Text />
    </div>
  </div>
</template>

<style scoped>
.views {
  background-color: #f9f9f9;
  /* justify-content: center; */
}
</style>
