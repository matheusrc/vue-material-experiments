<template>
  <div class="md-test">
    <table>
      <thead>
        <tr>
          <th v-for="(label, index) in MdTable.labels" :key="index">{{ label }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in value" :key="index">
          <slot name="md-table-row" :row="item" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'MdTest',
    props: {
      value: [Array, Object]
    },
    data: () => ({
      MdTable: {
        labels: {}
      }
    }),
    provide () {
      return {
        MdTable: this.MdTable
      }
    }
  }
</script>
