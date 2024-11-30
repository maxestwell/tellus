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
  data() {
    return {
      isRecording: false,
    }
  },
  methods: {
    startRecording() {
      this.isRecording = true
    },
    submitRecord() {
      // Handle the submit action here
      this.isRecording = false
    },
    submitResponse() {
      // Implement actual file upload or API submission here
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div :class="{ 'bg-color-change': isRecording }" class="text-choices">
    <div class="text-c-centre">
      <div class="text-container">
        <div class="text">
          <h1>You chose {{ $route.query.answer }}?!</h1>
          <p>record yourself for ~30s</p>
          <div class="button-choices">
            <button class="button-record button-record1" @click="startRecording">
              <p class="record-p">record</p>
            </button>
            <button
              class="button-record button-record2"
              v-if="isRecording"
              @click="$router.push('/')"
            >
              <p class="record-p">submit</p>
            </button>
            <!-- <button @click="goToSubmit">next</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-c-centre">
      <div class="text-container">
        <div class="text">
          <p>More to come...</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.bg-color-change {
  background-color: #ff0000 !important; /* Change to your desired color */
}

.record-p {
  font-variation-settings:
    'wght' 500,
    'slnt' -10;
}

.button-record1 {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
}

.button-record2 {
  outline: 1px solid #666666;
  border: none;
}

.button-record {
  width: 4em;
  height: 4em;
  padding: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-choices {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

p,
button {
  font-size: 0.5rem;
}

.text-choices {
  background-color: var(--color-background-mute);
  position: absolute;
  height: 100%;
  width: 100%;
  /* height: 0; */
  display: grid;
  grid: auto-flow / repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  /* padding-bottom: 100%; */
}

@media (max-width: 425px) {
  .text-choices {
    gap: 1rem;
    padding: 1rem;
    grid: auto-flow / repeat(2, 1fr);
  }
}

@media (max-width: 320px) {
  .text {
    flex-direction: column;
  }
}

@media (min-width: 1024px) {
  .text-choices {
    grid: auto-flow / repeat(6, 1fr);
  }
}

.text-c-centre {
  grid-column-start: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  background-color: var(--color-background-soft);
  outline: 1px solid #cccccc;
  border-radius: 5px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
  width: 100%;
  position: relative; /* Required for absolute positioning of inner content */
  padding-top: 100%; /* This makes the height equal to the width */
  z-index: 1;
}

.text-container > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  gap: 10px;
  padding: 1rem;
}

/* .text {
  display: grid;
  grid: repeat(5, 1fr) / repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  padding: 0.5em;
}

.item1 {
  width: fit-content;
  grid-column-start: 1;
  grid-row-start: 1;
}

.item2 {
  width: fit-content;
  grid-column-start: 2;
  grid-row-start: 2;
}

.item3 {
  width: fit-content;
  grid-column-start: 3;
  grid-row-start: 3;
}

.item4 {
  width: fit-content;
  grid-column-start: 4;
  grid-row-start: 4;
}

.item5 {
  width: fit-content;
  grid-column-start: 5;
  grid-row-start: 5;
} */
</style>
