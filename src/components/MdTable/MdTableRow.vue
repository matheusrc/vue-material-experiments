<template>
  <tr class="md-table-row">
    <slot />
  </tr>
</template>

<script>
  export default {
    name: 'MdTableRow',
    inject: ['MdTable']
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-row:not(:first-child) {
    border-top: 1px solid;
  }
</style>
