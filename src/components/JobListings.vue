<template>
    <div class="job-listings" v-for="job in jobs" :key="job.id">
        <SingleJob :job="job" />
    </div>
</template>

<script>
import SingleJob from './SingleJob.vue'
export default {
    name: 'JobListings',
    components: { SingleJob },
    props: [ 'jobs' ]
}
</script>

<style>
.job-listings {
    justify-content: space-between;
}
</style>