<template>
  <tr class="md-table-row" @click="autoSelectRow">
    <md-table-cell class="md-table-cell-selection" v-if="mdSelection">
      <md-checkbox v-model="isSelected" @change="selectRow" />
    </md-table-cell>

    <slot />
  </tr>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'

  export default {
    name: 'MdTableRow',
    props: {
      mdSelection: Boolean,
      mdAutoSelect: Boolean,
      mdItem: Object
    },
    inject: ['MdTable'],
    data: () => ({
      uniqueId: 'md-row-' + MdUuid(),
      isSelected: false
    }),
    methods: {
      autoSelectRow () {
        if (this.mdAutoSelect) {
          this.isSelected = !this.isSelected
        }
      },
      selectRow() {

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

  .md-table-cell-selection {
    .md-table-cell-container {
      padding-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    + td {
      .md-table-cell-container {
        padding-left: 0;
      }
    }
  }
</style>
