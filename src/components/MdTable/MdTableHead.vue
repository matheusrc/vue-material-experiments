<template>
  <th class="md-table-head">
    <md-ripple class="md-table-head-container">
      <div class="md-table-head-label">
        <slot />
      </div>
    </md-ripple>
  </th>
</template>

<script>
  export default {
    name: 'MdTableHead',
    inject: ['MdTable']
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-head {
    padding: 0;
    position: relative;
    font-size: 12px;
    line-height: 16px;
    text-align: left;

    &:last-child .md-table-head-label {
      padding-right: 24px;
    }

    &.md-numeric {
      text-align: right;
    }
  }

  .md-table-head-container {
    height: 56px;
    padding: 14px 0;
  }

  .md-table-head-label {
    height: 28px;
    padding-right: 32px;
    padding-left: 24px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    line-height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
