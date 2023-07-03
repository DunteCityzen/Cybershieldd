<template>
    <div class="page-wrapper p-t-45 p-b-50">
        <div class="wrapper wrapper--w790">
            <div class="card card-5">
                <div class="card-heading">
                    <h2 class="title">User Registration Form</h2>
                </div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-row m-b-55">
                            <div class="name">Official Name</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" id="fullname" type="text" name="names">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">National ID</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="number" id="idno" name="company">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Email</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="email" id="email" name="email">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Phone No.</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" id="phoneno" name="email">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Password</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" id="password" name="password">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Address</div>
                            <div class="value">
                                <div class="input-group">
                                    <input class="input--style-5" type="text" id="address" name="address">
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="name">Gender</div>
                            <div class="value">
                                <div class="input-group">
                                    <select class="input--style-5" id="gender" name="gender">
                                        <option>select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="form-control btn btn-primary submit px-3" @click="register" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'RegistrationForm',
    setup() {
        const router = useRouter()
        let userid
        
        const register = () => {
            const auth = getAuth()
            const fullname = document.getElementById('fullname').value
            const idno = document.getElementById('idno').value
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            const phoneno = document.getElementById('phoneno').value
            const address = document.getElementById('address').value
            const gender = document.getElementById('gender').value

            let userData = {}
            
            createUserWithEmailAndPassword( auth, email, password )
            .then((data) => {
                console.log(data)
                alert('Registration Successful')
                router.push('/user/profile')
                userid = auth.currentUser.uid
                console.log(userid)
                userData = {
                    userid: auth.currentUser.uid,
                    idno: idno,
                    fullname: fullname,
                    email: email,
                    address: address,
                    gender: gender,
                    phoneno: phoneno
                }
                axios.post('https://cybershield-24f97-default-rtdb.firebaseio.com/userdata.json', userData)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => {
                alert(error.message)
            })

        }

        return { register } 
    }
}
</script>
