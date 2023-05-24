<template>
    <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
            <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-8 align-self-end">
                    <h1 class="text-white font-weight-bold">Your Favorite Place of work for both techs and non-techs</h1>
                    <hr class="divider" />
                </div>
                <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 mb-5">Find jobs postings as they are made real time. Our registered users have unlimited access to job openings from any department and they can set up their own alerts which are triggered whenever the desired job,and/or job location.</p>
                    <router-link :to="{ name: 'Register' }" class="btn btn-primary btn-xl">Register Today!!</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Intro'
}
</script>

<style>

</style>