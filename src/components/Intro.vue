<script>
export default {
  data() {
    return {
      zIndexCounter: 100,
      windows: [
        { heading: 'Welcome to Tellus' },
        { heading: 'This website invites you to explore the "Would you rather" question.' },
        { heading: 'So...' },
        { heading: 'Would you rather' },
      ],
    }
  },
  mounted() {
    this.initializeDraggableWindows()
  },
  methods: {
    initializeDraggableWindows() {
      const windows = this.$refs.draggableWindows
      windows.forEach((window) => {
        window.addEventListener('mousedown', (e) => {
          this.zIndexCounter++
          window.style.zIndex = this.zIndexCounter

          if (e.target.closest('.top-window')) {
            const shiftX = e.clientX - window.getBoundingClientRect().left
            const shiftY = e.clientY - window.getBoundingClientRect().top

            const moveAt = (pageX, pageY) => {
              window.style.left = `${pageX - shiftX}px`
              window.style.top = `${pageY - shiftY}px`
            }

            const onMouseMove = (event) => {
              moveAt(event.pageX, event.pageY)
            }

            document.addEventListener('mousemove', onMouseMove)

            document.addEventListener(
              'mouseup',
              () => {
                document.removeEventListener('mousemove', onMouseMove)
              },
              { once: true },
            )
          }
        })
      })
    },
    closeWindow(event) {
      event.target.closest('.window').style.display = 'none'
    },
  },
}
</script>

<template>
  <div class="windows">
    <div class="window-container">
      <div
        v-for="(window, index) in windows"
        :key="index"
        :class="`window window${index + 1} draggable`"
        ref="draggableWindows"
        :style="{ zIndex: 100 - index }"
      >
        <div class="top-window">
          <button @click="closeWindow">close</button>
        </div>
        <div class="window-content">
          <h1 class="window-heading">{{ window.heading }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* global styling */

h1,
button,
p {
  font-family: 'Xanh Mono', monospace;
  font-style: normal;
  font-size: 16px;
}

h1 {
  font-size: 1.5rem;
  text-transform: uppercase;
}

p {
  font-size: 1rem;
}

.window-container {
  display: flex;
  justify-content: center;
}

.window {
  position: absolute;
  background-color: #f0f0f0;
  outline: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.top-window {
  background-color: #cccccc;
  display: flex;
  justify-content: flex-end;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: move;
}

.top-window button {
  background-color: #ff0000;
  color: #ffffff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
}

.window-content {
  padding: 10px;
  overflow: auto;
}

button {
  font-size: 1rem;
}

.draggable {
  position: absolute;
  width: 400px;
  background-color: #fff;
  overflow: hidden;
}

.top-window {
  cursor: move;
  background-color: #ccc;
  /* padding: 5px; */
}
</style>
