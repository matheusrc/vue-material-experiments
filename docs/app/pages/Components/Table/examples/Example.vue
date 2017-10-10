<template>
  <div>
    <md-table md-active-sort="first">
      <md-table-row>
        <md-table-head md-sort-by="first">First title</md-table-head>
        <md-table-head md-sort-by="second">Second title</md-table-head>
        <md-table-head>Third title</md-table-head>
      </md-table-row>

      <md-table-row v-for="_ in 10" :key="_">
        <md-table-cell>First content</md-table-cell>
        <md-table-cell>Second content</md-table-cell>
        <md-table-cell>Third content</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'Example'
  }
</script>

<style lang="scss" scoped>
  .md-table {

  }
</style>
