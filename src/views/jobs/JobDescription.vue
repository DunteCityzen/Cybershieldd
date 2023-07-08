<template>
  <div class="jobdesc-container">
    <div class="header-wrapper">
        <h1 id="jobtitle">Jobtitle</h1>
    </div>
    <div class="description-container">
        <h2>Job Description</h2>
        <div class="description-wrap" id="description-wrapper">
            Loading...
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
name: 'JobDescription',
props: [ 'id', 'title' ],
setup() {
    let data
    const routeparams = ref()
    let jobdescription
    let jobtitle

    const route = useRoute()
    routeparams.value = route.params
    console.log(routeparams.value)

    axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/jobs.json')
    .then((response) => {
        data = response.data
        for (let key in data) {
            if (data[key].id == routeparams.value.id) {
                jobdescription = data[key].description
                jobtitle = data[key].title
                console.log(jobdescription)
                document.getElementById('jobtitle').textContent = jobtitle
                document.getElementById('description-wrapper').innerHTML = jobdescription
                break
            }
        }
    })
    return { jobdescription, jobtitle }
}
}
</script>

<style>
.jobdesc-container {
    text-align: center;
    padding: 25px 25px;
    margin: 25px 25px;
    color: coral;
    margin-top: 5%;
}

.description-container {
    color: black;
    margin-top: 3%;
    text-align: left;
}
</style>