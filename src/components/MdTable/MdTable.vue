<template>
  <md-content class="md-table" :class="[{ 'md-has-card': mdCard }, $mdActiveTheme]">
    <md-table-card v-if="mdCard">
      <slot name="md-table-toolbar" />
      <slot name="md-table-header" />

      <md-content class="md-table-container md-scrollbar" :style="containerStyles">
        <table>
          <slot />
        </table>
      </md-content>
    </md-table-card>

    <table v-else>
      <slot />
    </table>
  </md-content>
</template>

<script>
  import raf from 'raf'
  import MdComponent from 'core/MdComponent'
  import MdObserveElement from 'core/utils/MdObserveElement'
  import MdContent from 'components/MdContent/MdContent'

  const prepareSlots = ($slots) => {
    const slotNames = ['md-table-toolbar', 'md-table-header']
    let leftSlots = Array.from($slots.default)

    slotNames.forEach(name => {
      $slots[name] = []
    })

    leftSlots.forEach((slot, index) => {
      if (slot && slot.tag) {
        const tag = slot.componentOptions && slot.componentOptions.tag

        if (tag && slotNames.includes(slot.componentOptions.tag)) {
          const slotIndex = slotNames.indexOf(tag)
          const slotName = slotNames[slotIndex]

          slot.data.slot = slotName

          $slots[slotName].push(slot)
          leftSlots.splice(index, 1)
        }
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
      mdHeight: {
        type: String,
        default: '500'
      },
      mdSortOrder: {
        type: String,
        default: 'asc'
      }
    },
    data: () => ({
      resizeObserver: null,
      MdTable: {
        fixedHeader: null,
        sort: null,
        sortOrder: null,
        contentPadding: null
      }
    }),
    provide () {
      const MdTable = this.MdTable

      MdTable.emitEvent = this.emitEvent

      return { MdTable }
    },
    computed: {
      containerStyles () {
        if (this.MdTable.fixedHeader) {
          return {
            overflow: 'auto',
            height: this.mdHeight + 'px'
          }
        }
      }
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
      },
      getTableEl () {
        return this.$el.querySelector('.md-table-container table')
      },
      calculateTableWidth () {
        const table = this.getTableEl()

        if (table) {
          this.MdTable.contentPadding = this.$el.offsetWidth - table.offsetWidth
        }
      }
    },
    beforeCreate () {
      prepareSlots(this.$slots)
    },
    beforeUpdate () {
      raf(this.calculateTableWidth)
    },
    async updated () {
      await this.$nextTick()

      raf(this.calculateTableWidth)
    },
    async mounted () {
      await this.$nextTick()

      raf(this.calculateTableWidth)

      if (this.MdTable.fixedHeader) {
        const table = this.getTableEl()

        if (table) {
          this.resizeObserver = MdObserveElement(table, {
            childList: true,
            characterData: true,
            subtree: true
          }, () => {
            raf(this.calculateTableWidth)
          })
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table {
    display: flex;
    flex-flow: column wrap;
    overflow-x: auto;

    &.md-has-card {
      overflow: visible;
    }

    .md-table-container {
      flex: 1;
    }

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      table-layout: fixed;
      overflow: hidden;
    }
  }
</style>
