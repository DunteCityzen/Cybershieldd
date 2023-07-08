<template>
    <div class="container margintop">
    <div class="main-body">
    
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <!-- /Breadcrumb -->
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div v-if="userData" class="mt-3">
                      <h4 id="fullname1">{{ userData.fullname }}</h4>
                      <p class="text-secondary mb-1">Open For Employment</p>
                      <p class="text-muted font-size-sm" id="address1">{{ userData.address }}</p>
                    </div>
                    <div v-else-if="userData === null" class="mt-3">
                      <p>Loading...</p>
                    </div>
                    <div v-else class="mt-3">
                      <p>Error fetching data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div v-if="userData" class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Official Name</h6>
                    </div>
                    <div id="fullname-wrapper">
                      <div class="col-sm-9 text-secondary" id="fullname">
                        {{ userData.fullname }}
                      </div>
                    </div>
                  </div>
                  <hr>
                  <div class="row" id="row2">
                    <div class="col-sm-3">
                      <h6 class="mb-0">ID No.</h6>
                    </div>
                    <div id="idno-wrapper">
                      <div class="col-sm-9 text-secondary" id="idno">
                        {{ userData.idno }}
                      </div>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div id="email-wrapper">
                      <div class="col-sm-9 text-secondary" id="email">
                        {{ userData.email }}
                      </div>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div id="phoneno-wrapper">
                      <input type="text" value="" class="col-sm-9 text-secondary" id="phoneno" />
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div id="address-wrapper">
                      <input type="text" value="" class="col-sm-9 text-secondary" id="address" />
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div id="button-wrapper" class="col-sm-12">
                      <button id="btn-edit" class="btn btn-info " @click="save">Save</button>
                    </div>
                  </div>
                </div>
                <div v-else-if="userData === null" class="card-body">
                  <h1>Loading...</h1>
                </div>
                <div v-else class="card-body">
                  <h1>Error retrieving your data from the database</h1>
                </div>
              </div>

              <div class="row gutters-sm fullwidth">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h2 class="d-flex align-items-center mb-3">Job Alerts</h2>
                      <div id="job1">
                        <small id="job1-title">Pentester</small>
                        <p id="job1-applicants">applicants: </p>
                      </div>
                      <div id="job2">
                        <small id="job2-title">Pentester</small>
                        <p id="job2-applicants">applicants: </p>
                      </div>
                      <div id="job3">
                        <small id="job3-title">Pentester</small>
                        <p id="job3-applicants">applicants: </p>
                      </div>
                      <div id="job4">
                        <small id="job4-title">Pentester</small>
                        <p id="job4-applicants">applicants: </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

export default {
name: 'UserProfile',
setup() {
  let auth = getAuth()
  let userData = {}
  let isLoggedIn
  let email = auth.currentUser.email
  let data
  let jobdata
  let jobkeys = []
  let jobids = []

  const edit = () => {
    
  }

  axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/jobs.json')
    .then((response) => {
      jobdata = response.data
      for (let key in jobdata) {
        jobkeys.push(key)
        jobids.push(jobdata[key].jobid)
      }
    })
    .catch((error) => {
      alert(error.message, "while fetching jobs")
      console.log(error)
    })

  const save = () => {
    
    const userData1 = {
      phoneno: document.getElementById('phoneno').value,
      address: document.getElementById('address').value
    }

    for (let key in data) {
      if (String(data[key].email) == String(email)) {
        data[key].phoneno = userData1.phoneno
        data[key].address = userData1.address

        axios.put('https://cybershield-24f97-default-rtdb.firebaseio.com/userdata.json', data)
        .then((response) => {
          console.log(response)
          window.location.reload()
        })
        .catch((error) => {
          console.log(error)
          alert(error.message, "axios putting into userdata")
          window.location.reload()
        })
        break
      }
    }
  }

  axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/userdata.json')
    .then(response => {
      data = response.data
      for (let key in data) {
        if (String(data[key].email) == String(email)) {
          userData = {
            fullname: data[key].fullname,
            idno: data[key].idno,
            email: data[key].email,
            phoneno: data[key].phoneno,
            address: data[key].address
          }
          document.getElementById('fullname').textContent = userData.fullname
          document.getElementById('fullname1').textContent = userData.fullname
          document.getElementById('idno').textContent = userData.idno
          document.getElementById('email').textContent = userData.email
          document.getElementById('phoneno').value = userData.phoneno
          document.getElementById('address').value = userData.address
          document.getElementById('address1').textContent = userData.address
          break
        }
      }
    })
    .catch(error => {
      console.log(error)
      alert(error.message)
    })

  onMounted(() => {
    if (auth) {
      isLoggedIn = true
    }
    else {
      isLoggedIn = false
    }

    

    axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/applications.json')
    .then((response) => {
      const appdata = response.data
        for (let jobkey in jobdata) {
          for( let appkey in appdata) {
            if (appdata[appkey].jobid == jobdata[jobkey].id) {
              jobdata[jobkey].applicants += 1
              continue
            }
          }
        }
        document.getElementById('job1-title').textContent = jobdata[jobkeys[0]].title + ' - ' + jobdata[jobkeys[3]].type
        document.getElementById('job1-applicants').textContent += jobdata[jobkeys[0]].applicants

        document.getElementById('job2-title').textContent = jobdata[jobkeys[1]].title + ' - ' + jobdata[jobkeys[3]].type
        document.getElementById('job2-applicants').textContent += jobdata[jobkeys[1]].applicants

        document.getElementById('job3-title').textContent = jobdata[jobkeys[2]].title + ' - ' + jobdata[jobkeys[3]].type
        document.getElementById('job3-applicants').textContent += jobdata[jobkeys[2]].applicants

        document.getElementById('job4-title').textContent = jobdata[jobkeys[3]].title + ' - ' + jobdata[jobkeys[3]].type
        document.getElementById('job4-applicants').textContent += jobdata[jobkeys[3]].applicants
    })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    })
  })

  return { auth, isLoggedIn, userData, data, edit, save, jobdata, jobkeys }
}
}
</script>

<style scoped>
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}

.margintop {
  margin-top: 5%;
}

.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.fullwidth {
    width: 200%;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>