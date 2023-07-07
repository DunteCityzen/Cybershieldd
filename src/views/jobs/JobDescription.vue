<template>
  <div class="jobdesc-container">
    <h1>{{ jobtitle }}</h1>
    <h2>Job Description</h2>
    <div class="description-wrap" id="description-wrapper">
        Loading...
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
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

    onMounted(() => {
        const route = useRoute()
        routeparams.value = route.params
        document.getElementById('description-wrapper').innerHTML = jobdescription
    })
    axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/jobs.json')
    .then((response) => {
        data = response.data
        for (let key in data) {
            if (data[key].jobid == routeparams.value.id) {
                jobdescription = data[key].description
                jobtitle = data[key].title
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
}
</style>