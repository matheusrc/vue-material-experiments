<template>
  <md-content class="md-table" :class="[$mdActiveTheme]">
    <table>
      <slot />
    </table>
  </md-content>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdContent from 'components/MdContent/MdContent'

  export default new MdComponent({
    name: 'MdTable',
    components: {
      MdContent
    },
    data: () => ({
      MdTable: {}
    }),
    provide () {
      return {
        MdTable: this.MdTable
      }
    },
    computed: {

    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table {
    display: flex;
    flex-flow: column wrap;
    overflow-x: auto;

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
