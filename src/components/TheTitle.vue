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
    <RouterLink to="/">
      <h1>
        <HoverEffect
          class="rounded-border"
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
.rounded-border {
  /* border: 2px solid #000000; */
  background-color: #0033ff;
  color: #f2f2f2;
  border-radius: 20em;
  padding: 0px 50px;
  text-align: center;
  width: fit-content;
}
</style>
