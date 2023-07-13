<template>
    <div class="cv-container">
        <div class="cv-header">
            <h1>CURRICULUM VITAE</h1>
            <h2 id="idno"></h2>
            <h3 id="fullname"></h3>
        </div>
        <div id="cv" class="cv">
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
name: 'ApplicantCV',
setup() {
    const route = useRoute()
    const applicationid = route.params.applicationid
    console.log(applicationid)
    
    onMounted(() => {
        axios.get('https://cybershield-24f97-default-rtdb.firebaseio.com/applications.json')
        .then((response) => {
            const data = response.data
            let cvdata
            let applicantid
            let applicantname

            for(let key in data) {
                if ( data[key].applicationid == applicationid) {
                    cvdata = data[key].cv
                    applicantid = data[key].idno
                    applicantname = data[key].fullname
                    document.getElementById('idno').textContent = 'ID No: ' + applicantid
                    document.getElementById('fullname').textContent = 'Name: ' + applicantname

                    const binaryString = atob(cvdata.split(',')[1])
                    const len = binaryString.length
                    const bytes = new Uint8Array(len)
                    for (let i = 0; i < len; i++) {
                        bytes[i] = binaryString.charCodeAt(i)
                    }
                    // Create a new Blob object using the 
                    // response data of the onload object
                    const blob = new Blob([bytes.buffer], {type: 'application/pdf'})
                    const url = URL.createObjectURL(blob)

                    const embed = document.createElement('embed')
                    embed.src = url
                    embed.classList.add('embedding')
                    document.getElementById('cv').appendChild(embed)
                }
            }
        })
        .catch((error) => {
            console.log(error)
            alert(error.message)
        })
    })

    return {  }
}
}
</script>

<style>
.cv-container {
    padding: 20px 20px;
}

.cv-header {
    text-align: center;
}

.embedding {
    width: 100%;
    min-height: 750px;
    padding: 25px 25px;
}
</style>