<template>
  <md-content class="md-table" :class="[{ 'md-has-table': mdCard }, $mdActiveTheme]">
    <md-table-card v-if="mdCard">
      <slot name="md-table-toolbar" />

      <table>
        <slot />
      </table>
    </md-table-card>

    <table v-else>
      <slot />
    </table>
  </md-content>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdContent from 'components/MdContent/MdContent'

  const prepareSlots = ($slots) => {
    const slotName = 'md-table-toolbar'
    let leftSlots = Array.from($slots.default)

    $slots[slotName] = []

    leftSlots.forEach((slot, index) => {
      if (slot.tag && slot.componentOptions.tag === slotName) {
        slot.data.slot = slotName

        $slots[slotName].push(slot)
        leftSlots.splice(index, 1)
      }
    })

    $slots.default = leftSlots
  }

  export default new MdComponent({
    name: 'MdTable',
    components: {
      MdContent
    },
    props: {
      mdCard: Boolean,
      mdSort: String,
      mdSortOrder: {
        type: String,
        default: 'asc'
      }
    },
    data: () => ({
      MdTable: {
        sort: null,
        sortOrder: null
      }
    }),
    provide () {
      const MdTable = this.MdTable

      MdTable.emitEvent = this.emitEvent

      return { MdTable }
    },
    watch: {
      mdSort: {
        immediate: true,
        handler () {
          this.MdTable.sort = this.mdSort
        }
      },
      mdSortOrder: {
        immediate: true,
        handler () {
          this.MdTable.sortOrder = this.mdSortOrder
        }
      }
    },
    methods: {
      emitEvent (eventName, value) {
        this.$emit(eventName, value)
      }
    },
    beforeCreate () {
      prepareSlots(this.$slots)
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table {
    display: flex;
    flex-flow: column wrap;
    overflow-x: auto;

    &.md-has-table {
      overflow: visible;
    }

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
