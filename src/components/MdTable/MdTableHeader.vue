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
  import raf from 'raf'
  import MdObserveElement from 'core/utils/MdObserveElement'

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
    methods: {
      calculateHeadSize () {
        const table = this.MdTable.getTableEl()
        const headCells = this.$el.querySelectorAll('th')

        if (table && headCells.length) {
          const firstRow = table.querySelector('tr')
          const rowCells = Array.from(firstRow.querySelectorAll('td'))

          if (rowCells.length) {
            headCells.forEach((cell, index) => {
              cell.style.width = rowCells[index].offsetWidth + 'px'
            })
          }
        }
      }
    },
    created () {
      this.MdTable.fixedHeader = true
    },
    mounted () {
      const table = this.MdTable.getTableEl()

      if (table) {
        raf(this.calculateHeadSize)

        this.resizeObserver = MdObserveElement(table, {
          childList: true,
          characterData: true,
          subtree: true
        }, () => {
          raf(this.calculateHeadSize)
        })
      }
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
