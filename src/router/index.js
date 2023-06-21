import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from  '../views/jobs/Jobs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Contact from '../views/Contact.vue'
import ApplicationForm from '../views/jobs/ApplicationForm.vue'
import JobsManagement from '../views/admin/JobsManagement.vue'
import AdminDashboard from '../views/admin/AdminDashboard'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/job/id/apply',
    name: 'ApplicationForm',
    component: ApplicationForm
  },
  {
    path: '/jobmanagement',
    name: 'JobsManagement',
    component: JobsManagement
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
