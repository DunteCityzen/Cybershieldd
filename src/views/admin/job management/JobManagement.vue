<template>
    <section class="ftco-section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav aria-label="breadcrumb navbar">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'AddJob' }">Add Job</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'RemoveJob' }">RemoveJob</router-link>
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
name: 'JobManagement'
}
</script>

<style scoped>

</style>