<template>
    <div class="row" data-aos="fade">
        <div class="col-md-12">
            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div class="mb-4 mb-md-0 mr-5">
                    <div class="job-post-item-header d-flex align-items-center">
                        <h2 class="mr-3 text-black h4">{{ job.title }}</h2>
                        <div class="badge-wrap">
                            <span class="bg-primary text-white badge py-2 px-4">{{ job.type }}</span>
                        </div>
                    </div>
                    <div class="job-post-item-body d-block d-md-flex">
                        <div>
                            <span class="fl-bigmug-line-big104"></span>
                            <span>{{ job.location }}</span>
                        </div>
                        <div class="mr-3">
                            <span class="fl-bigmug-line-portfolio23"></span>
                            <router-link :to="{ name: 'JobDescription', params:{ id: job.id, title: job.title } }">view job details.</router-link>
                        </div>
                    </div>
                </div>
                <div class="ml-auto">
                    <router-link :to="{ name: 'ApplicationForm', params: { id: job.id } }" class="btn btn-primary py-2">APPLY JOB</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleJob',
    props: ['job']
}
</script>

<style>
.job-post-item {
    justify-content: space-between;
}

.job-post-item-body {
    justify-content: space-between;
}
</style>
