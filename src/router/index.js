import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from  '../views/jobs/Jobs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Contact from '../views/Contact.vue'
import ApplicationForm from '../views/jobs/ApplicationForm.vue'
import AddJob from '../views/admin/job management/AddJob'
import RemoveJob from '../views/admin/job management/RemoveJob'
import AdminDashboard from '../views/admin/AdminDashboard'
import UserProfile from '../views/users/UserProfile'
import JobApplications from '../views/admin/job management/JobApplications'
import UserManagement from '../views/admin/user management/UserManagement'
import JobManagement from '../views/admin/job management/JobManagement'


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
    path: '/admin/jobmanagement',
    name: 'JobManagement',
    component: JobManagement,
    children: [
      { path: 'addjob', name: 'AddJob', component: AddJob },
      { path: 'removejob', name: 'RemoveJob', component: RemoveJob }
    ]
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    children: [
      { path: '', name: 'JobApplications', component: JobApplications }
    ]
  },
  {
    path: '/users/id/profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin/usermanagement',
    name: 'UserManagement',
    component: UserManagement
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
