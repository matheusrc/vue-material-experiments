<template>
  <div>
    <md-progress md-buffer :mdProgress="progress" :mdBufferProgress="buffer"></md-progress>
    <!-- <br>
    <md-progress class="md-accent" md-indeterminate></md-progress>
    <br>
    <md-progress class="md-warn" md-indeterminate></md-progress> -->
  </div>
</template>

<script>
export default {
  name: 'Buffer',
  data: () => ({
    progress: 40,
    buffer: 60
  })
}

</script>
