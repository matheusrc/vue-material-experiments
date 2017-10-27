<template>
  <div>
    <md-table v-model="people" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Default color</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="single" @md-selected="onSelect">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
      </md-table-row>
    </md-table>

    <p>Selected:</p>
    {{ selected }}
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      selected: {},
      people: [
        {
          id: 1,
          name: "Default Color",
          email: "default@color.com",
        },
        {
          id: 2,
          name: "Primary Color",
          email: "primary@color.com",
        },
        {
          id: 3,
          name: "Accent Color",
          email: "accent@color.com",
        }
      ]
    }),
    methods: {
      getClass: ({ id }) => ({
        'md-primary': id === 2,
        'md-accent': id === 3
      }),
      onSelect (item) {
        this.selected = item
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
</style>
