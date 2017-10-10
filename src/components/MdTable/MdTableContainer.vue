<template>
  <md-content class="md-table-container md-scrollbar" :style="containerStyles">
    <table>
      <slot />
    </table>
  </md-content>
</template>

<script>
  import raf from 'raf'
  import MdObserveElement from 'core/utils/MdObserveElement'
  import MdContent from 'components/MdContent/MdContent'

  export default {
    name: 'MdTableContainer',
    components: {
      MdContent
    },
    props: {
      mdHeight: {
        type: String,
        default: '500'
      }
    },
    inject: ['MdTable'],
    computed: {
      containerStyles () {
        if (this.MdTable.fixedHeader) {
          return {
            overflow: 'auto',
            height: this.mdHeight + 'px'
          }
        }
      }
    },
    methods: {
      calculateTableWidth () {
        const table = this.MdTable.getTableEl()

        if (table) {
          this.MdTable.contentPadding = this.$el.offsetWidth - table.offsetWidth
        }
      }
    },
    async updated () {
      await this.$nextTick()

      raf(this.calculateTableWidth)
    },
    async mounted () {
      await this.$nextTick()

      raf(this.calculateTableWidth)

      if (this.MdTable.fixedHeader) {
        const table = this.MdTable.getTableEl()

        if (table) {
          this.resizeObserver = MdObserveElement(table, {
            childList: true,
            characterData: true,
            subtree: true
          }, () => {
            raf(this.calculateTableWidth)
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-container {
    flex: 1;
  }
</style>
