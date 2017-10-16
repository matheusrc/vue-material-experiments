<template>
  <md-table-cell class="md-table-cell-selection" v-if="MdTable.hasSelection">
    <md-checkbox v-model="isSelected" :disabled="!mdSelectable" @change="onChange" />
  </md-table-cell>
</template>

<script>
  export default {
    name: 'MdTableCellSelection',
    props: {
      value: Boolean,
      mdRowId: [Number, String],
      mdSelectable: Boolean
    },
    inject: ['MdTable'],
    data: () => ({
      isSelected: false
    }),
    methods: {
      setSelection (selection) {
        this.$set(this.MdTable.items[this.mdRowId], 'isSelected', selection)
        this.isSelected = selection
      },
      onChange () {
        this.$emit('input', this.isSelected)
        this.setSelection(this.isSelected)
      }
    },
    async mounted () {
      await this.$nextTick()

      this.$watch(() => this.MdTable.items[this.mdRowId], {
        deep: true,
        handler (item) {
          this.setSelection(item.isSelected)
        }
      })
    }
  }
</script>
