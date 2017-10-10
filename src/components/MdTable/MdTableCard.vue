<template>
  <md-card class="md-table-card">
    <slot />
  </md-card>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdCard from 'components/MdCard/MdCard'

  export default new MdComponent({
    name: 'MdTableCard',
    components: {
      MdCard
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-card.md-table-card {
    overflow: auto;
  }
</style>
