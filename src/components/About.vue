<template>
    <section class="page-section bg-primary" id="about">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">We got your back!</h2>
                    <hr class="divider divider-light" />
                    <p class="text-white-75 mb-4">Job opportunities have become hard to come by these days. Worry not though, just register for an account and you'll get notified in real time every time there is a job postings on the platform!</p>
                    <router-link :to="{ name: 'Login' }" class="btn btn-light btn-xl">Login!</router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="page-section" id="services">
    <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">Our Service</h2>
        <hr class="divider" />
        <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                    <h3 class="h4 mb-2">Penetration Testing</h3>
                    <p class="text-muted mb-0">We offer pentesting services to our clients, therefore experience in matters ethical hacking could land you a proper job here at Cyber Shield! We offer:<br/> Internal Pentests, External Pentests, Physical Pentests, API Pentests, Wireless Pentests, IoT Pentests.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                    <h3 class="h4 mb-2">Cyber Forensics</h3>
                    <p class="text-muted mb-0">All types of digital forensics from storage media to network devices and overal systems are offered by us.<br/>Adversaries always leave behind digital footprints, we just have to know how to look and where to look.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                    <h3 class="h4 mb-2">Security Training</h3>
                    <p class="text-muted mb-0">Training employees and making them security aware as well as the top level managers help keep an organizations security posture at pur!</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                    <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                    <h3 class="h4 mb-2">Consultancy and Incident Response</h3>
                    <p class="text-muted mb-0">Cyber shield is very equiped with eloquent and experienced senior professionals whose time in the game have equipped them with insights that are very valuable in keeping other organizations safe</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>

</style>