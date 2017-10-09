<template>
  <td class="md-table-cell">
    <div class="md-table-cell-container">
      <slot />
    </div>
  </td>
</template>

<script>
  export default {
    name: 'MdTableCell',
    inject: ['MdTable']
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-cell {
    height: 48px;
    position: relative;
    transition: .3s $md-transition-default-timing;
    font-size: 13px;
    line-height: 18px;

    &:last-child .md-table-cell-container {
      padding-right: 24px;
    }
  }

  .md-table-cell-container {
    padding: 6px 32px 6px 24px;
  }
</style>
