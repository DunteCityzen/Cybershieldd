<template>
  <section class="ftco-section adminheader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav aria-label="breadcrumb navbar">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'JobApplications' }">Job Applications</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'JobManagement' }">Job Management</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <router-link :to="{ name: 'UserManagement' }">User Management</router-link>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
/* import '../../../node_modules/jquery/dist/jquery.min.js' */


export default {
name: 'AdminDashboard'
}
</script>

<style scoped>
</style>