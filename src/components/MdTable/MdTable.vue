<template>
  <md-content class="md-table" :class="[$mdActiveTheme]">
    <table>
      <slot />
    </table>
  </md-content>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdContent from 'components/MdContent/MdContent'

  export default new MdComponent({
    name: 'MdTable',
    components: {
      MdContent
    },
    props: {
      mdSort: String,
      mdSortOrder: String
    },
    data: () => ({
      MdTable: {
        sort: null,
        sortOrder: null
      }
    }),
    provide () {
      const MdTable = this.MdTable

      MdTable.emitEvent = this.emitEvent

      return { MdTable }
    },
    watch: {
      mdSort: {
        immediate: true,
        handler () {
          this.MdTable.sort = this.mdSort
        }
      },
      mdSortOrder: {
        immediate: true,
        handler () {
          this.MdTable.sortOrder = this.mdSortOrder
        }
      }
    },
    methods: {
      emitEvent (eventName, value) {
        this.$emit(eventName, value)
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table {
    display: flex;
    flex-flow: column wrap;
    overflow-x: auto;

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
