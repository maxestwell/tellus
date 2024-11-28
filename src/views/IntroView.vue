<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import Text from '../components/Text.vue'
import WindowTemplate from '../components/WindowTemplate.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <div class="intro">
    <WindowTemplate />
    <Text />
  </div>
</template>

<style scoped>
.intro {
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
