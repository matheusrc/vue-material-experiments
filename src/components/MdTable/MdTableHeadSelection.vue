<template>
  <td class="md-table-cell-selection" v-if="MdTable.selectable.length">
    <div class="md-table-cell-container">
      <md-checkbox v-model="allSelected" @change="selectAll" />
    </div>
  </td>
</template>

<script>
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
      allSelected: false
    }),
    methods: {
      selectAll () {

      }
    }
  }
</script>
