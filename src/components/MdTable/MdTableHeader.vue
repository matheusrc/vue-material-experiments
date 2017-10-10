<template>
  <div class="md-table-header" :style="headerStyles">
    <table>
      <tr>
        <slot />
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'MdTableHeader',
    inject: ['MdTable'],
    computed: {
      headerStyles () {
        if (this.MdTable.contentPadding) {
          return {
            'padding-right': this.MdTable.contentPadding + 'px'
          }
        }
      }
    },
    created () {
      this.MdTable.fixedHeader = true
    },
    beforeDestroy () {
      this.MdTable.fixedHeader = false
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-header {
    border-bottom: 1px solid;
  }
</style>
