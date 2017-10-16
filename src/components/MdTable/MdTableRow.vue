<template>
  <tr class="md-table-row" :class="rowClasses" @click="autoSelectRow">
    <md-table-head-selection v-model="isSelected" v-if="isHeaderRow" />
    <md-table-cell-selection v-model="isSelected" :md-selectable="mdSelectable" :md-row-id="rowId" v-else />

    <slot />
  </tr>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'
  import MdTableHeadSelection from './MdTableHeadSelection'
  import MdTableCellSelection from './MdTableCellSelection'

  export default {
    name: 'MdTableRow',
    components: {
      MdTableHeadSelection,
      MdTableCellSelection
    },
    props: {
      mdSelectable: Boolean,
      mdAutoSelect: Boolean,
      mdItem: Object
    },
    inject: ['MdTable'],
    data: () => ({
      uniqueId: 'md-row-' + MdUuid(),
      isSelected: false,
      isHeaderRow: false
    }),
    computed: {
      rowId () {
        if (this.mdItem) {
          return this.mdItem.id || this.uniqueId
        }

        return this.uniqueId
      },
      rowClasses () {
        return {
          'md-header-row': this.isHeaderRow,
          'md-autoselect': this.mdAutoSelect
        }
      },
      canSelect () {
        if (this.isHeaderRow) {
          return this.MdTable.hasSelection
        }

        return this.mdSelectable
      }
    },
    methods: {
      setIsHeaderRow () {
        const tableRows = Array.from(this.$el.parentNode.childNodes).filter(row => {
          if (row.tagName) {
            return row.tagName.toLowerCase() === 'tr'
          }
        })
        const headerEl = this.$el.querySelector('th')

        if (headerEl) {
          this.isHeaderRow = tableRows[0] === this.$el
        }
      },
      getSelection () {
        return this.mdItem.checked || this.mdItem.selected || this.isSelected
      },
      setItem () {
        if (!this.isHeaderRow && this.mdItem && !this.MdTable.items[this.rowId]) {
          this.$set(this.MdTable.items, this.rowId, {
            id: this.rowId,
            hasSelection: this.mdSelectable,
            isSelected: this.getSelection(),
            data: this.mdItem
          })
        }
      },
      autoSelectRow () {
        if (this.mdAutoSelect) {
          this.isSelected = !this.isSelected
        }
      }
    },
    async mounted () {
      await this.$nextTick()

      this.setIsHeaderRow()
      this.setItem()
    },
    beforeDestroy () {
      if (this.mdItem) {
        this.$delete(this.MdTable.items, this.rowId)
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-row {
    &:not(:first-of-type) {
      border-top: 1px solid;
    }

    &.md-autoselect {
      cursor: pointer;
    }
  }

  .md-table-cell-selection {
    width: 66px;

    + th {
      .md-table-head-label {
        padding-left: 0;
      }
    }

    + td {
      .md-table-cell-container {
        padding-left: 0;
      }
    }

    .md-table-cell-container {
      padding-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .md-checkbox {
      margin: 0;

      .md-checkbox-container {
        width: 18px;
        min-width: 18px;
        height: 18px;

        &:after {
          top: -1px;
          left: 4px;
          transform: rotate(45deg) scale3D(.1, .1, 1);
        }
      }
    }
  }
</style>
