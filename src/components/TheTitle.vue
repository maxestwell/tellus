<script setup>
import HoverEffect from '@/components/HoverEffect.vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="wrapper">
    <RouterLink class="rlink" to="/">
      <h1 class="rounded-border">
        <HoverEffect
          defaultSettings="'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4"
          hoverSettings="'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4"
        >
          {{ title }}
        </HoverEffect>
      </h1>
    </RouterLink>
  </div>
</template>

<style scoped>
.rlink::before {
  content: ''; /* Empty content for spacing */
  display: block; /* Make it a block element */
  height: 0em; /* Set the height */
}

h1::before {
  content: '';
  display: block;
  height: 0.06em;
}

h1 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
}

.rounded-border {
  /* border: 2px solid #000000; */
  background-color: #0033ff;
  color: #f2f2f2;
  border-radius: 20em;
  padding: 10px 30px;
  text-align: center;
  width: fit-content;
}
</style>
