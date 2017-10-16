<template>
  <md-table-cell class="md-table-cell-selection" v-if="MdTable.hasSelection">
    <md-checkbox v-model="allSelected" :disabled="!MdTable.hasSelection" @change="selectAll" />
  </md-table-cell>
</template>

<script>
  import MdSleep from 'core/utils/MdSleep'

  function chunk (arr, len) {
    let chunks = []
    let i = 0
    let n = arr.length

    while (i < n) {
      chunks.push(arr.slice(i, i += len))
    }

    return chunks
  }

  export default {
    name: 'MdTableHeadSelection',
    inject: ['MdTable'],
    data: () => ({
      allSelected: false,
      clicked: false
    }),
    methods: {
      restoreWatcher (delay) {
        window.setTimeout(() => {
          this.clicked = false
        }, delay)
      },
      setRowSelection (item) {
        this.$set(this.MdTable.items[item.id], 'isSelected', this.allSelected)
      },
      selectLinesWithChunks (items) {
        const delay = 20
        const chunks = chunk(items, delay)
        let counter = 0

        this.clicked = true

        chunks.forEach(chunk => {
          window.setTimeout(() => {
            chunk.forEach(item => this.setRowSelection(item))
          }, counter * delay)

          counter++
        })

        this.restoreWatcher(chunks.length * delay)
      },
      selectRowsWithBatch (items) {
        this.clicked = true

        items.forEach(item => this.setRowSelection(item))

        this.restoreWatcher(10)
      },
      selectAll () {
        const itemsAsArray = Object.values(this.MdTable.items)

        if (itemsAsArray.length > 50) {
          this.selectLinesWithChunks(itemsAsArray)
        } else {
          this.selectRowsWithBatch(itemsAsArray)
        }
      }
    },
    mounted () {
      this.$watch('MdTable.items', {
        deep: true,
        handler (items) {
          if (!this.clicked) {
            this.allSelected = Object.values(items).every(item => item.isSelected)
          }
        }
      })
    }
  }
</script>
