<template>
  <tr class="md-table-row" :class="rowClasses" @click="onClick">
    <md-table-cell-selection v-model="isSelected" :md-selectable="mdSelectable === 'multiple'" :md-row-id="mdIndex" />
    <slot />
  </tr>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdTableCellSelection from './MdTableCellSelection'

  export default {
    name: 'MdTableRow',
    components: {
      MdTableCellSelection
    },
    props: {
      mdIndex: [Number, String],
      mdId: [Number, String],
      mdSelectable: {
        type: [String],
        ...MdPropValidator('md-selectable', ['multiple', 'single'])
      },
      mdAutoSelect: Boolean
    },
    inject: ['MdTable'],
    data: () => ({
      index: null,
      isSelected: false
    }),
    computed: {
      isSingleSelected () {
        return this.MdTable.singleSelection === this.mdId
      },
      hasMultipleSelection () {
        return this.mdSelectable === 'multiple'
      },
      hasSingleSelection () {
        return this.mdSelectable === 'single'
      },
      rowClasses () {
        if (this.MdTable.hasValue) {
          return {
            'md-has-selection': this.mdAutoSelect || this.hasSingleSelection,
            'md-selected': this.isSelected,
            'md-selected-single': this.isSingleSelected
          }
        }
      }
    },
    methods: {
      onClick () {
        if (this.MdTable.hasValue) {
          if (this.hasMultipleSelection) {
            this.selectRowIfMultiple()
          } else {
            this.selectRowIfSingle()
          }
        }
      },
      selectRowIfSingle () {
        this.MdTable.singleSelection = this.mdId
        this.$emit('md-selected', this.MdTable.getModelItem(this.mdIndex))
      },
      selectRowIfMultiple () {
        if (this.mdAutoSelect) {
          this.isSelected = !this.isSelected
        }
      }
    },
    async mounted () {
      await this.$nextTick()

      this.$set(this.MdTable.selectable, this.mdIndex, this.mdSelectable)
    },
    beforeDestroy () {
      if (this.mdItem) {
        this.$set(this.MdTable.selectable, this.mdIndex)
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-row {
    transition: .3s $md-transition-default-timing;
    transition-property: background-color, font-weight;
    will-change: background-color, font-weight;

    &.md-has-selection {
      cursor: pointer;
    }

    &.md-selected-single {
      font-weight: 500;
    }

    tbody & td {
      border-top: 1px solid;
    }
  }
</style>
