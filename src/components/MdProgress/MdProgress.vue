<template>
  <transition name="md-progress" appear>
    <div class="md-progress" :class="classes">
      <div class="md-progress-track" :style="styles"></div>
    </div>
  </transition>
</template>

<script>
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdProgress',
  props: {
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
      if (!this.mdIndeterminate) {
        return {
          width: this.mdProgress + '%'
        }
      }
    }
  }
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-progress {
    width: 100%;
    height: 4px;
    position: relative;
    overflow: hidden;
    transition: $md-transition-default;

    &.md-indeterminate .md-progress-track {
      right: 0;

      &:before,
      &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        will-change: left, right;
        content: '';
      }

      &:before {
        animation: progress-indeterminate 2.3s cubic-bezier(.65, .815, .735, .395) infinite;
      }

      &:after {
        animation: progress-indeterminate-short 2.3s cubic-bezier(.165, .84, .44, 1) infinite;
        animation-delay: 1.15s;
      }
    }

    &.md-progress-enter,
    &.md-progress-leave-active {
      opacity: 0;
      transform: scaleY(0) translateZ(0);
    }

    &.md-progress-enter-active {
      transform: scaleY(1) translateZ(0);
    }

    background-color: rgba(#3F51B5, .38);

    &:not(.md-indeterminate) .md-progress-track {
      background-color: rgba(#3F51B5, 1);
    }

    .md-progress-track {
      &:after,
      &:before {
        background-color: rgba(#3F51B5, 1);
      }
    }
  }

  .md-progress-track {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: $md-transition-default;
  }

  @keyframes progress-indeterminate {
    0% {
      right: 100%;
      left: -35%;
    }

    60% {
      right: -100%;
      left: 100%;
    }

    100% {
      right: -100%;
      left: 100%;
    }
  }

  @keyframes progress-indeterminate-short {
    0% {
      right: 100%;
      left: -200%;
    }

    60% {
      right: -8%;
      left: 107%;
    }

    100% {
      right: -8%;
      left: 107%;
    }
  }
</style>
