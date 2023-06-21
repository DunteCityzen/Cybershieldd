<template>
    <div class="admin">
        <div>
            <h1>Jobs Management</h1>
        </div>
        <div>
            <p>Add a new job</p>
        </div>
        <div>
            <label for="title">Job ID</label>
            <input type="number" id="jobId" placeholder="Enter Job name" />
        </div>
        <div>
            <label for="title">Job Title</label>
            <input type="text" id="title" placeholder="Enter Job name" />
        </div>
        <div>
            <label for="title">Job Type</label>
            <input type="text" id="type" placeholder="Enter Job type" />
        </div>
        <div>
            <label for="title">Job Description</label>
            <input type="text" id="description" placeholder="Enter Job Description" />
        </div>
        <div>
            <label for="title">Job Location</label>
            <input type="text" id="location" placeholder="Enter Job Location" />
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

        const title = document.getElementById('title').value
        const type = document.getElementById('type').value
        const description = document.getElementById('description').value
        const location = document.getElementById('location').value
        const id = document.getElementById('jobId').value

        const jobData = {
            title: title,
            type: type,
            description: description,
            location: location,
            id: id
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