<template>
  <td>
    <slot />
  </td>
</template>

<script>
  export default {
    name: 'MdTableCell',
    props: {
      mdLabel: String
    },
    inject: ['MdTable'],
    data: () => ({
      index: null
    }),
    mounted () {
      const cells = Array.from(this.$el.parentNode.childNodes).filter(({ tagName }) => {
        return tagName && tagName.toLowerCase() === 'td'
      })

      cells.forEach((cell, index) => {
        const $vm = cell.__vue__

        this.index = index

        this.$set(this.MdTable.labels, this.index, $vm.mdLabel)
      })
    },
    beforeDestroy () {
      this.$delete(this.MdTable.labels, this.index)
    }
  }
</script>
