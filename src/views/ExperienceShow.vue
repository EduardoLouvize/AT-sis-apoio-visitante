<template>
    <section>
        <h1>{{experience.name}}</h1>
        <p>{{experience.description}}</p>
        <img :src="`/images/${experience.image[1]}`" :alt="experience.name">
    </section>
</template>

<script>
import sourceData from "@/data.json"

export default {
    props: {
        id: {type: String, required: true},
        experienceSlug: {type: String, required: true}
    },
    computed: {
        destination() {
            return sourceData.destinations.find(d =>d.id===parseInt(this.id))
        },
        experience() {
            return this.destination.experiences.find(e => e.slug==this.experienceSlug)
        }
    }
}
</script>