<template>
  <div>
    <div class="additem" @click="addItem"></div>
    <DynamicGrid ref="grid" :style="{ '--items-per-row': itemsPerRow }" />
  </div>
</template>

<script>
import DynamicGrid from './DynamicGrid.vue'

export default {
  components: { DynamicGrid },
  data() {
    return {
      itemCount: 0,
    }
  },
  computed: {
    itemsPerRow() {
      // Adjust based on the item count, ensuring a max of 5 items per row
      return Math.min(this.itemCount, 20)
    },
  },
  methods: {
    addItem() {
      this.itemCount++
      this.$refs.grid.addItem()
    },
  },
}
</script>

<style scoped>
.additem {
  width: 100px;
  height: 100px;
  position: absolute;
}
</style>
