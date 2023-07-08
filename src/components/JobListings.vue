<template>
    <div class="job-listings" id="joblistings" v-for="job in jobs" :key="job.id">
        <SingleJob :job="job" />
    </div>
</template>

<script>
import SingleJob from './SingleJob.vue'
export default {
    name: 'JobListings',
    components: { SingleJob },
    props: [ 'jobs' ],
    setup(props) {
        /* onMounted(() => {
            console.log(props.jobs)
        }) */
    }
}
</script>

