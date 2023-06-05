<template>
    <div class="admin">
        <div>
            <h1>Jobs Management</h1>
        </div>
        <div>
            <p>Add a new job</p>
        </div>
        <div>
            <label for="title">Job Title</label>
            <input type="text" id="title" ref="title" placeholder="Enter Job name" />
        </div>
        <div>
            <label for="title">Job Type</label>
            <input type="text" id="type" ref="type" placeholder="Enter Job type" />
        </div>
        <div>
            <label for="title">Job Description</label>
            <input type="text" id="description" ref="description" placeholder="Enter Job Description" />
        </div>
        <div>
            <label for="title">Job Location</label>
            <input type="text" id="location" ref="location" placeholder="Enter Job Location" />
        </div>
        <div>
            <button @click="addJob">Add Job</button>
        </div>
    </div>
</template>

<script>
import '../../firebase/init'
import axios from 'axios'

export default {
    name: 'JobsManagement',
    setup() {
        const addJob = () => {

        const jobData = {
            title: 'Security Analyst',
            type: 'Full Time',
            description: '5 year experience needed and OSCP',
            location: 'Nairobi',
            id: 2
        }

        axios.post('https://cybershield-ee459-default-rtdb.firebaseio.com/jobs.json', jobData)
        .then(response => {
            console.log(response)
        })
    }
    return { addJob }
    }
}
</script>

<style scoped>
.admin {
    background-color: red;
}
</style>