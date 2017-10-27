<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Gender</md-table-head>
        <md-table-head>Job Title</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-label="ID" md-numeric>1</md-table-cell>
        <md-table-cell md-label="Name">Shawna Dubbin</md-table-cell>
        <md-table-cell md-label="Email">sdubbin0@geocities.com</md-table-cell>
        <md-table-cell md-label="Gender">Male</md-table-cell>
        <md-table-cell md-label="Job Title">Assistant Media Planner</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-label="ID" md-numeric>2</md-table-cell>
        <md-table-cell md-label="Name">Odette Demageard</md-table-cell>
        <md-table-cell md-label="Email">odemageard1@spotify.com</md-table-cell>
        <md-table-cell md-label="Gender">Female</md-table-cell>
        <md-table-cell md-label="Job Title">Account Coordinator</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-label="ID" md-numeric>3</md-table-cell>
        <md-table-cell md-label="Name">Vera Taleworth</md-table-cell>
        <md-table-cell md-label="Email">vtaleworth2@google.ca</md-table-cell>
        <md-table-cell md-label="Gender">Male</md-table-cell>
        <md-table-cell md-label="Job Title">Community Outreach Specialist</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TableBasic'
  }
</script>
