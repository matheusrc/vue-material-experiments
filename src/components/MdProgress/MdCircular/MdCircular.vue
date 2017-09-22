<template>
  <transition name="md-circular" appear>
    <div class="md-circular" :class="[classes]":style="styles">
      <svg class="md-circular-draw" viewBox="25 25 50 50">
        <circle class="md-circular-path" cx="50" cy="50" r="20" :stroke-width="mdStroke" :stroke-dasharray="dashProgress"></circle>
      </svg>
    </div>
  </transition>
</template>

<!-- <style lang="scss" src="./mdSpinner.scss"></style> -->

<script>
// import theme from '../../core/components/mdTheme/mixin'
export default {
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
  // mixins: [theme],
  computed: {
    classes () {
      return {
        'md-indeterminate': this.mdIndeterminate
      }
    },
    styles () {
      const newSize = this.mdSize + 'px'
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
}
</script>

<style lang="scss">
  $swift-ease-out-duration: .4s !default;
  $swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;
  $swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;
  .md-circular {
    display: inline-block;
    position: relative;
    pointer-events: none;
    will-change: transform, opacity;

    &.md-indeterminate {
      .md-circular-draw {
        animation: circular-rotate 1.9s linear infinite;
        transform: rotate(0deg) translateZ(0);
      }

      .md-circular-path {
        stroke-dasharray: 2, 200;
        animation: circular-dash 1.425s ease-in-out infinite;
      }
    }

    &.md-circular-leave-active {
      opacity: 0;
      transform: scale(.8) translateZ(0);
      transition: $swift-ease-out;
    }

    &:not(.md-indeterminate) {
      &.md-circular-enter-active {
        transition-duration: 2s;

        .md-circular-draw {
          transform: rotate(45deg) translateZ(0);
          /* animation: circular-initial-rotate 1.98s $swift-ease-out-timing-function forwards; */
          animation: circular-initial-rotate .36s $swift-ease-out-timing-function forwards;
        }
      }
    }
  }

  .md-circular-path {
    stroke: Blue;
  }

  .md-circular-draw {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: rotate(270deg) translateZ(0);
    transform-origin: center center;
    will-change: transform, opacity;
  }

  .md-circular-path {
    fill: none;
    stroke-dashoffset: 0;
    stroke-miterlimit: 10;
    transition: $swift-ease-out;
  }

  @keyframes circular-rotate {
    to {
      transform: rotate(360deg) translateZ(0);
    }
  }

  @keyframes circular-initial-rotate {
    0% {
      opacity: 0;
      transform: rotate(-90deg) translateZ(0);
    }

    20% {
      opacity: 1;
    }

    100% {
      transform: rotate(270deg) translateZ(0);
    }
  }

  @keyframes circular-dash {
    0% {
      stroke-dasharray: 2, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
</style>
