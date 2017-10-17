<template functional>
  <tr class="md-table-row">
    <slot />
  </tr>
</template>

<script>
  export default {
    name: 'MdTableRow'
  }
</script>

<style lang="scss">
  .md-table-row {
    &.md-autoselect {
      cursor: pointer;
    }

    tbody & td {
      border-top: 1px solid;
    }
  }
</style>

