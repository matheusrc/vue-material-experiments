<template>
  <transition
    name="md-circular"
    appear>
    <div
      class="md-circular"
      :class="[themeClass, classes]"
      :style="styles">
      <svg
        class="md-circular-draw"
        viewBox="25 25 50 50">
        <circle
          class="md-circular-path"
          cx="50"
          cy="50"
          r="20"
          :stroke-width="mdStroke"
          :stroke-dasharray="dashProgress"/>
      </svg>
    </div>
  </transition>
</template>

<style lang="scss" src="./mdSpinner.scss"></style>

<script>
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdCircular',
  props: {
    mdSize: {
      type: Number,
      default: 50
    },
    mdStroke: {
      type: Number,
      default: 3.5
    },
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return {
        'md-indeterminate': this.mdIndeterminate
      }
    },
    styles () {
      const newSize = `${this.mdSize}px`
      return {
        width: newSize,
        height: newSize
      }
    },
    dashProgress () {
      let progress = this.mdProgress * 125 / 100
      if (this.mdIndeterminate) {
        return false
      }
      if (progress >= 125) {
        progress = 130
      }
      return `${progress}, 200`
    }
  }
})
</script>
