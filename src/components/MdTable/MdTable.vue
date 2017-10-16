<script>
  import MdComponent from 'core/MdComponent'
  import MdTableContainer from './MdTableContainer'
  import MdTableCard from './MdTableCard'

  export default new MdComponent({
    name: 'MdTable',
    components: {
      MdTableContainer,
      MdTableCard
    },
    props: {
      mdCard: Boolean,
      mdSort: String,
      mdHeight: String,
      mdSortOrder: {
        type: String,
        default: 'asc'
      }
    },
    data: () => ({
      resizeObserver: null,
      MdTable: {
        hasSelection: false,
        fixedHeader: null,
        sort: null,
        sortOrder: null,
        contentPadding: null,
        items: {}
      }
    }),
    computed: {
      tableItems () {
        return this.MdTable.items
      }
    },
    provide () {
      const MdTable = this.MdTable

      MdTable.emitEvent = this.emitEvent
      MdTable.getTableEl = this.getTableEl

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
      },
      tableItems: {
        deep: true,
        handler () {
          this.MdTable.hasSelection = Object.values(this.tableItems).some(item => item.hasSelection)
        }
      }
    },
    methods: {
      prepareSlots () {
        const slotNames = ['md-table-toolbar', 'md-table-header']
        let leftSlots = Array.from(this.$slots.default)

        slotNames.forEach(name => {
          if (!this.$slots[name]) {
            this.$slots[name] = []
          }
        })

        leftSlots.forEach((slot, index) => {
          if (slot && slot.tag) {
            const tag = slot.componentOptions && slot.componentOptions.tag

            if (tag && slotNames.includes(slot.componentOptions.tag)) {
              const slotIndex = slotNames.indexOf(tag)
              const slotName = slotNames[slotIndex]

              slot.data.slot = slotName

              this.$slots[slotName].push(slot)
              leftSlots.splice(index, 1)
            }
          }
        })

        this.$slots.default = leftSlots
      },
      emitEvent (eventName, value) {
        this.$emit(eventName, value)
      },
      getTableEl () {
        return this.$el.querySelector('.md-table-container table')
      }
    },
    render (createElement) {
      this.prepareSlots(this.$slots)

      const container = createElement(MdTableContainer, {
        props: {
          mdHeight: this.mdHeight
        }
      }, this.$slots.default)

      const createTable = slot => {
        return createElement('div', {
          staticClass: 'md-table',
          class: [
            {
              'md-has-card': this.mdCard
            },
            this.$mdActiveTheme
          ]
        }, [slot])
      }

      if (this.mdCard) {
        const card = createElement(MdTableCard, [
          ...this.$slots['md-table-toolbar'],
          ...this.$slots['md-table-header'],
          container
        ])

        return createTable(card)
      }

      return createTable(container)
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

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
