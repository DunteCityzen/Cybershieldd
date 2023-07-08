<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container px-4 px-lg-5">
            <router-link :to="{ name: 'Home' }" class="navbar-brand">CYBER SHIELD</router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item"><router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link></li>
                    <li class="nav-item" v-if="user == null"><router-link :to="{ name: 'Login' }" class="nav-link">Login/Register</router-link></li>
                    <li class="nav-item" v-if="user != null"><router-link :to="{ name: 'UserProfile' }" class="nav-link">My Profile</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'Jobs' }" class="nav-link">Jobs</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'Contact' }" class="nav-link">Contact us</router-link></li>
                </ul>
                <div class="btn-logout">
                    <button v-if="user != null" class="btn-lo" @click="logOut">Log Out</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'Navbar',
    setup() {
        const user = ref(null)
        const router = useRouter()
        /* let isLoggedin = ref(false) */
        /* auth.value = getAuth() */
        
        const getCurrentUser = () => {
            return new Promise((resolve, reject) => {
                const auth = getAuth();
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe()
                resolve(user)
                }, reject)
            })
        }

        onMounted( async () => {
            user.value = await getCurrentUser()
            console.log(user.value, "from getcurrentuser")
        })
        
        /* if (auth.value.currentUser != null) {
            isLoggedin = true
            console.log(isLoggedin)
        } */

        const logOut = () => {
            const auth = getAuth()
            signOut(auth)
            user.value = null
            router.push('/login')
        }


        return { logOut, user }
    }
}
</script>

<style>
.btn-logout {
    padding: 10px;
    margin-left: 20px;
    font-weight: bolder;
    font-size: large;
}
.btn-lo {
    border: solid;
    border-radius: 5px;
    background-color: #ff8c00;
    padding: 2px 10px;
}
</style>