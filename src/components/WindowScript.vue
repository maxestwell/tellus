<script>
export default {
  data() {
    return {
      zIndexCounter: 100,
      windows: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    }
  },
  mounted() {
    this.initializeDraggableWindows()
  },
  methods: {
    initializeDraggableWindows() {
      const windows = this.$refs.draggableWindows
      console.log('Draggable windows:', windows) // Debug log
      if (!windows || windows.length === 0) {
        console.error('No draggable windows found')
        return
      }
      windows.forEach((window) => {
        console.log('Initializing window:', window) // Debug log
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
        :key="window.id"
        :class="`window window${index + 1} draggable`"
        :ref="'draggableWindows'"
        :style="{ zIndex: 100 - index }"
      >
        <div class="top-window">
          <button @click="closeWindow">close</button>
        </div>
        <div class="window-content">
          <!-- Slot for content -->
          <slot :name="`window-${window.id}`"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  font-size: 1.5rem;
  text-transform: lowercase;
  font-family: 'Xanh Mono', monospace;
}

.window-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.window {
  position: absolute;
  background-color: #f0f0f0;
  outline: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.top-window {
  background-color: #cccccc;
  display: flex;
  justify-content: flex-end;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: move;
  /* padding: 5px; */
}

.top-window button {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 1rem;
}

.window-content {
  padding: 10px;
  overflow: auto;
}

h1 {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Xanh Mono', monospace;
}
</style>
