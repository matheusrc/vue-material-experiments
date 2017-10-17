<template>
  <md-tag-switcher :md-tag="contentTag" class="md-table">
    <table>
      <thead>
        <tr>
          <md-table-head-selection />
          <md-table-head v-for="(item, index) in MdTable.items" :key="index" v-bind="item" />
        </tr>
      </thead>

      <tbody>
        <md-table-row-ghost v-for="(item, index) in value" :key="index" :md-index="index">
          <slot name="md-table-row" :item="item" />
        </md-table-row-ghost>
      </tbody>
    </table>
  </md-tag-switcher>
</template>

<script>
  import MdTagSwitcher from 'components/MdTagSwitcher/MdTagSwitcher'
  import MdTableHead from './MdTableHead'
  import MdTableRow from './MdTableRow'
  import MdTableRowGhost from './MdTableRowGhost'
  import MdTableHeadSelection from './MdTableHeadSelection'
  import MdTableCellSelection from './MdTableCellSelection'

  export default {
    name: 'MdTable',
    components: {
      MdTagSwitcher,
      MdTableHead,
      MdTableRow,
      MdTableRowGhost,
      MdTableHeadSelection,
      MdTableCellSelection
    },
    props: {
      value: [Array, Object],
      mdCard: Boolean,
      mdSort: String,
      mdSortOrder: {
        type: String,
        default: 'asc'
      }
    },
    data: () => ({
      MdTable: {
        items: {},
        sort: null,
        sortOrder: null,
        selectable: [],
        fixedHeader: null,
        contentPadding: null
      }
    }),
    computed: {
      contentTag () {
        if (this.mdCard) {
          return 'md-card'
        }

        return 'md-content'
      },
      tableItems () {
        return this.MdTable.items
      }
    },
    provide () {
      const MdTable = this.MdTable

      MdTable.emitEvent = this.emitEvent
      // MdTable.getTableEl = this.getTableEl

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
  }
</script>

<style lang="scss">
  .md-table {
    display: flex;
    flex-flow: column wrap;
    overflow-x: auto;

/*     &.md-has-card {
      overflow: visible;
    } */

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
