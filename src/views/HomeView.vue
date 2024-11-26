<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import Random from '../components/Random.vue'
import CustomModal from '../components/CustomModal.vue'

const headerTitle = ref('Default Title')
const showModal = ref(false)
const doNotShow = ref(false)

// Modal display logic
onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <div class="views">
    <header>
      <div class="title-container">
        <TheTitle :title="headerTitle" />
      </div>
      <TheNav />
    </header>
    <div class="random-container">
      <Random />
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}

.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.checkbox-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

input[type='checkbox'] {
  margin-right: 8px;
}

.random-container {
  flex: 1;
  display: flex;
  width: 100%;
}
</style>
