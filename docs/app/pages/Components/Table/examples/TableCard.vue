<template>
  <div>
    <md-table md-sort="name" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Nutrition</h1>

        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head md-sort-by="name">Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head md-sort-by="gender">Gender</md-table-head>
        <md-table-head md-sort-by="title">Job title</md-table-head>
      </md-table-row>

      <md-table-row v-for="{ id, name, email, gender, title } in people" :key="id">
        <md-table-cell md-numeric>{{ id }}</md-table-cell>
        <md-table-cell>{{ name }}</md-table-cell>
        <md-table-cell>{{ email }}</md-table-cell>
        <md-table-cell>{{ gender }}</md-table-cell>
        <md-table-cell>{{ title }}</md-table-cell>
      </md-table-row>
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
