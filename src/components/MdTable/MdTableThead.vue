<template>
  <tr>
    <md-table-head-selection />
    <md-table-head v-for="(item, index) in MdTable.items" :key="index" v-bind="item" />
  </tr>
</template>

<script>
  import MdTableHead from './MdTableHead'
  import MdTableHeadSelection from './MdTableHeadSelection'

  export default {
    name: 'MdTableThead',
    inject: ['MdTable'],
    components: {
      MdTableHead,
      MdTableHeadSelection
    }
  }
</script>
