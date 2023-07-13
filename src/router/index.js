import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import axios from 'axios'
import Home from '../views/Home.vue'
import CompanyInfo from '../views/CompanyInfo.vue'
import Jobs from  '../views/jobs/Jobs.vue'
import JobDescription from '../views/jobs/JobDescription'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegistrationForm from '../views/RegistrationForm'
import Contact from '../views/Contact.vue'
import ApplicationForm from '../views/jobs/ApplicationForm.vue'
import AddJob from '../views/admin/job management/AddJob'
import RemoveJob from '../views/admin/job management/RemoveJob'
import AdminDashboard from '../views/admin/AdminDashboard'
import UserProfile from '../views/users/UserProfile'
import JobApplications from '../views/admin/job management/JobApplications'
import ApplicantCV from '../views/admin/job management/ApplicantCV'
import UserManagement from '../views/admin/user management/UserManagement'
import Users from '../views/admin/user management/Users'
import RemoveUser from '../views/admin/user management/RemoveUser'
import JobManagement from '../views/admin/job management/JobManagement'
import ContactForms from '../views/admin/ContactForms'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'CompanyInfo',
    component: CompanyInfo
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id/apply',
    name: 'ApplicationForm',
    component: ApplicationForm,
    props: true
  },
  {
    path: '/jobs/:id/description',
    name: 'JobDescription',
    component: JobDescription,
    props: true
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
    path: '/regform',
    name: 'RegistrationForm',
    component: RegistrationForm,
    meta: {
      requiresCheckout: true
    }
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {
      isAdmin: true
    },
    children: [
      { path: '', name: 'JobApplications', component: JobApplications, meta: { isAdmin: true } },
      { path: '/jobapplications/:applicationid/cv', name: 'ApplicantCV', component: ApplicantCV, props: true, meta: { isAdmin: true } },
      { path: 'jobmanagement', name: 'JobManagement', component: JobManagement, meta: { isAdmin: true }, children: [ { path: 'addjob', name: 'AddJob', component: AddJob, meta: { isAdmin: true } }, { path: 'removejob', name: 'RemoveJob', component: RemoveJob, meta: { isAdmin: true } } ] },
      { path: 'usermanagement', name: 'UserManagement', component: UserManagement, meta: { isAdmin: true }, children: [ { path: '', name: 'Users', component: Users, meta: { isAdmin: true } }, { path: 'removeuser', name: 'RemoveUser', component: RemoveUser, meta: { isAdmin: true } } ] }
    ]
  },
  {
    path: '/user/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/contactforms',
    name: 'ContactForms',
    component: ContactForms,
    meta: { 
      isAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      const user = await getCurrentUser()
      if (user) {
        next()
      } else {
        alert('Access Denied. Please login')
        next('/login')
      }
    } catch (error) {
      console.error('Error checking user authentication:', error);
      next('/login')
    }
  }
  else if (to.matched.some((record) => record.meta.isAdmin)) {
    try {
      const user = await getCurrentUser()
      if (user.email == adminemail) {
        next()
      }
      else {
        alert('Access Denied. Please login as admin')
        next('/login')
      }
    } catch (error) {
      console.error('Error checking user authentication:', error)
      next('/login')
    }
  } else if  (to.matched.some((record) => record.meta.requiresCheckout)) {
    try {
      const user = await getCurrentUser()
      if (to.query.payment_success == 'true') {
        next()
      }
      else if (user) {
        next('/user/profile')
      }
      else {
        next('/register')
      }
    }
    catch (error) {
      console.log(error)
      alert(error.message)
    }
  } else {
    next()
  }
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/admin.json')
  .then((response) => {
    const data = response.data
    adminemail = data['-NZQuznlMF0Q6-BDB1Fi'].email // admin's identifier in the database. Don't change.
  })
  .catch((error) => {
    console.log(error)
    alert(error.message)
  })

let adminemail
  
export default router
