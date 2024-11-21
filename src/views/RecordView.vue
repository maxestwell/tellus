<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<script>
export default {
  name: 'RecordPage',
  data() {
    return {
      file: null,
    }
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0]
    },
    goToSubmit() {
      this.$router.push({ path: '/submit', query: { answer: this.$route.query.answer } })
    },
  },
}
</script>

<template>
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <div class="record">
      <h1>Record Your Response</h1>
      <p>Your answer: {{ $route.query.answer }}</p>

      <button @click="goToSubmit">Next</button>
    </div>
  </div>
</template>

<style scoped></style>

<style>
.views {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.record {
  height: 100%;
  width: 100%;
}
</style>
