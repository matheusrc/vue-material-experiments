<template>
  <div>
    <md-circular mdIndeterminate></md-circular>
    <br>
    <md-circular :mdProgress="progress"></md-circular>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Circular',
  data: () => ({
    progress: 0,
    progressInterval: null,
    transition: true
  }),
  methods: {
    startProgress () {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3
        if (this.progress > 100) {
          window.clearInterval(this.progressInterval)
        }
      }, 150)
    },
    restartProgress () {
      this.progress = 0
      this.transition = false
      window.clearInterval(this.progressInterval)
      window.setTimeout(() => {
        this.transition = true
        this.startProgress()
      }, 600)
    }
  },
  mounted () {
    this.startProgress()
  }
}
</script>
