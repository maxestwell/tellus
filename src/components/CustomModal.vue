<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-content" @click.stop>
      <h2>{{ title }}</h2>
      <slot name="content"></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  visible: Boolean,
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const handleOverlayClick = () => {
  closeModal()
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

/* button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 100%;
  background-color: #007bff;
  color: white;
  cursor: pointer;
} */

button:hover {
  background-color: #0056b3;
}
</style>
