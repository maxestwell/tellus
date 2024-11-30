<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const selectAnswer = (answer) => {
  router.push({ path: '/record', query: { answer } })
}
</script>

<template>
  <div class="text-choices">
    <div class="text-c-centre">
      <div class="text-container">
        <div class="text">
          <p class="item1">Lose a</p>
          <button class="item2" @click="selectAnswer('a hand')">hand</button>
          <p class="item3">or a</p>
          <button class="item4" @click="selectAnswer('a foot')">foot</button>
          <p class="item5">?</p>
        </div>
      </div>
    </div>
    <div class="text-c-centre">
      <div class="text-container">
        <div class="text">
          <p>More to come...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p,
button {
  font-size: 0.5rem;
}

.text-choices {
  position: absolute;
  /* height: 100%; */
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
  justify-content: center;
  align-items: center;
  gap: 10px;
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
