<template>
  <div>
    <md-table v-model="people">
      <template slot="md-table-row" slot-scope="{ row }">
        <md-table-cell md-label="Title 1">{{ row.name }}</md-table-cell>
        <md-table-cell md-label="Title 2">{{ row.email }}</md-table-cell>
        <md-table-cell md-label="Title 3">{{ row.gender }}</md-table-cell>
      </template>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      people: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        },
        {
          id: 2,
          name: "Odette Demageard",
          email: "odemageard1@spotify.com",
          gender: "Female",
          title: "Account Coordinator"
        },
        {
          id: 3,
          name: "Vera Taleworth",
          email: "vtaleworth2@google.ca",
          gender: "Male",
          title: "Community Outreach Specialist"
        },
        {
          id: 4,
          name: "Lonnie Izkovitz",
          email: "lizkovitz3@youtu.be",
          gender: "Female",
          title: "Operator"
        },
        {
          id: 5,
          name: "Thatcher Stave",
          email: "tstave4@reference.com",
          gender: "Male",
          title: "Software Test Engineer III"
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .md-table {

  }
</style>
