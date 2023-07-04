<template>
    <section class="ftco-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav aria-label="breadcrumb navbar">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Users' }">Users</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'RemoveUser' }">Remove User</router-link>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
name: 'UserManagement'
}
</script>

<style scoped>

</style>