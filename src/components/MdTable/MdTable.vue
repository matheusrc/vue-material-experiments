<template>
  <md-tag-switcher :md-tag="contentTag" class="md-table">
    <table>
      <thead>
        <md-table-row>
          <md-table-head v-for="(item, index) in MdTable.items" :key="index" v-bind="item" />
        </md-table-row>
      </thead>

      <tbody>
        <slot name="md-table-row" v-for="(item, index) in value" :row="item" :md-item="item" />
      </tbody>
    </table>
  </md-tag-switcher>
</template>

<script>
  import MdTagSwitcher from 'components/MdTagSwitcher/MdTagSwitcher'
  import MdTableHead from './MdTableHead'
  import MdTableRow from './MdTableRow'

  export default {
    name: 'MdTable',
    components: {
      MdTagSwitcher,
      MdTableHead,
      MdTableRow
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
        hasSelection: false,
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
