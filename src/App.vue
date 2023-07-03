<template>
  <component :is="getNavbarComponent"></component>
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import AdminNavbar from './components/AdminNavbar.vue'
import Footer from './components/Footer.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'App',
  components: {
    Navbar,
    AdminNavbar,
    Footer
  },
  computed: {
    getNavbarComponent() {
      const currentRoute = this.$route.name
      switch(currentRoute) {
        case 'JobApplications':
          return AdminNavbar
        case 'JobManagement':
          return AdminNavbar
        case 'UserManagement':
          return AdminNavbar
        case 'AdminDashboard':
          return AdminNavbar
        case 'AddJob':
          return AdminNavbar
        case 'RemoveJob':
          return AdminNavbar
        case 'AdminSettings':
          return AdminNavbar
        case 'Users':
          return AdminNavbar
        case 'PendingRegistration':
          return AdminNavbar
        default:
          return Navbar
      }
    }
  },
  setup() {
    const isLoggedIn = ref(false)
    onMounted(() => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if(user) {
          isLoggedIn.value = true
        }
        else {
          isLoggedIn.value = false
        }
      })
    })
  }
}
</script>
