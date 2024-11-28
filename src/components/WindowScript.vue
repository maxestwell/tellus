<script>
export default {
  data() {
    return {
      zIndexCounter: 100,
      windows: [],
    }
  },
  created() {
    this.windows = Object.keys(this.$slots).map((name, index) => ({
      id: index + 1,
      name,
    }))
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeDraggableWindows()
    })
  },
  methods: {
    initializeDraggableWindows() {
      const windows = this.$refs.draggableWindows.querySelectorAll('.draggable')
      if (!windows || windows.length === 0) {
        console.error('No draggable windows found')
        return
      }
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
    closeWindow(index) {
      this.windows.splice(index, 1)
    },
  },
}
</script>

<template>
  <div class="windows-container">
    <div class="windows" ref="draggableWindows">
      <div
        v-for="(window, index) in windows"
        :key="window.id"
        class="window draggable"
        :style="{ zIndex: 100 - index }"
      >
        <div class="top-window">
          <button @click="closeWindow(index)">Close</button>
        </div>
        <div class="window-content">
          <slot :name="window.name"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.windows-container {
  position: absolute;
  /* width: 100%;
  height: 100%; */
}

.windows {
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.window {
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  outline: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 400px;
  min-height: 160px;
}

.top-window {
  background-color: #cccccc;
  display: flex;
  justify-content: flex-end;
  border-radius: 5px 5px 0px 0px;
  cursor: move;
  /* padding: 5px; */
}

.top-window button {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px 5px 0px 5px;
  font-size: 1rem;
}

.window-content {
  padding: 10px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

h1,
button {
  /* font-size: 1.5rem; */
  text-transform: uppercase;
  /* font-family: 'Xanh Mono', monospace; */
}

button {
  text-transform: lowercase;
}
</style>
