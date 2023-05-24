<template>
    <Intro />
    <About />
    <JobsIntro />
</template>

<script>
import Intro from '../components/Intro.vue'
import About from '../components/About.vue'
import JobsIntro from '../components/JobsIntro.vue'

export default {
    name: "Home",
    components: { Intro, About, JobsIntro }
}
</script>

<style>

</style>