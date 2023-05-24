<template>
    <section class="page-section bg-dark text-white" id="jobs">
        <div class="container px-4 px-lg-5 text-center">
            <h2 class="mb-4">Find Posted Jobs Here!</h2>
            <p class="text-muted mb-0">You can find jobs posted from any branch of Cyber Shield.<br/>From Remote jobs to on-site depending on your location in relevance to that of the branch you're applying to</p>
            <router-link :to="{ name: 'Jobs' }" class="btn btn-light btn-xl">Job Listings</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'JobsIntro'
}
</script>

<style>

</style>