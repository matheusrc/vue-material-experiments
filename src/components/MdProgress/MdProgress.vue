<template>
  <transition name="md-progress" appear>
    <div class="md-progress" :class="classes">
      <div v-if="mdBuffer" class="md-progress-buffer-dots"></div>
      <div v-if="mdBuffer" class="md-progress-buffer" :style="buffer"></div>
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
    mdBuffer: Boolean,
    mdBufferProgress: {
      type: Number,
      default: 0
    },
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return {
        'md-indeterminate': this.mdIndeterminate,
        'md-buffer': this.mdBuffer
      }
    },
    buffer () {
      if (!this.mdIndeterminate) {
        return {
          width: `${this.mdBufferProgress}%`
        }
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

  .md-progress-buffer {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: top left;
    transition: mdc-animation-exit(transform, 250ms);
    background-color: #e6e6e6;
  }
  .md-progress-buffer-dots {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-size: 10px 4px;
    animation: buffering 250ms infinite linear;
  }

  @keyframes buffering {
    to {
      transform: translateX(-10px);
    }
  }

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

    &.md-buffer {
      background-color: transparent !important;

      transition: all 0.2s linear;

      .md-dashed:before {
        display: block;
        animation: buffer 3s infinite linear;
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

  @keyframes query {
    0% {
      opacity: 1;
      transform: translateX(35%) scale(.3, 1);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) scale(0, 1);
    }
  }
  @keyframes buffer {
    0% {
      opacity: 1;
      background-position: 0px -23px;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      background-position: -200px -23px;
    }
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
