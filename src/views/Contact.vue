<template>
    <section class="page-section" id="contact">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-8 col-xl-6 text-center">
                    <h2 class="mt-0">Contact us Form!</h2>
                    <hr class="divider" />
                    <p class="text-muted mb-5">Experiencing any issues using the application?<br/>Any unexpected application behavior?<br/>Queries, feedback or any other inquiries?<br/>Feel free to contact us</p>
                </div>
            </div>
            <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div class="col-lg-6">
                    <div id="contactForm">
                        <!-- Name input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label for="name">Full name</label>
                            <div class="invalid-feedback">A name is required.</div>
                        </div>
                        <!-- Email address input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="email" type="email"/>
                            <label for="email">Email address</label>
                            <div class="invalid-feedback" >An email is required.</div>
                            <div class="invalid-feedback">Email is not valid.</div>
                        </div>
                        <!-- Phone number input-->
                        <div class="form-floating mb-3">
                            <input class="form-control" id="phone" type="tel" placeholder="074567890"/>
                            <label for="phone">Phone number</label>
                            <div class="invalid-feedback">A phone number is required.</div>
                        </div>
                        <!-- Message input-->
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                            <label for="message">Message</label>
                            <div class="invalid-feedback">A message is required.</div>
                        </div>
                        <!-- Submit Button-->
                        <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" @click="submit">Submit</button></div>
                    </div>
                </div>
            </div>
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-4 text-center mb-5 mb-lg-0">
                    <i class="bi-phone fs-2 mb-3 text-muted"></i>
                    <div>Phone number: +254 730 422 034</div>
                    <div>Email address: dennis@mj.com</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getAuth } from 'firebase/auth'
import axios from 'axios'
export default {
    name: 'Contact',
    setup() {
        const auth = getAuth()
        let nameEl = document.getElementById('name')
        let emailEl = document.getElementById('email')
        let phoneEl = document.getElementById('phone')
        let messageEl = document.getElementById('message')
        
        if (auth.currentUser) {
            axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/userdata.json')
            .then((response) => {
                userdata = response.data
                for(let key in userdata) {
                    if(auth.currentUser.email == userdata[key].email) {
                        nameEl.value = userdata[key].fullname
                        emailEl.value = userdata[key].email
                        phoneEl.value = userdata[key].phoneno
                        break
                    }
                }
            })
        }

        const submit = () => {
            const contactformData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            }
            axios.post('https://cybershield-24f97-default-rtdb.firebaseio.com/contactforms.json', contactformData)
            .then((response) => {
                console.log(response)
                alert("Submission successful. Wait to be contacted by phone or email")
                document.getElementById('name').value = ''
                document.getElementById('email').value = ''
                document.getElementById('phone').value = ''
                document.getElementById('message').value = ''
            })
            .catch((error) => {
                console.log(error.code)
                alert(error.message, " : Submission unsuccessful")
            })
        }

        return { submit }
    }
}
</script>

<style>

</style>