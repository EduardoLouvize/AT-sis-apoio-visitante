<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
  </section>
  <section class="details">
    <router-view />
  </section>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";

export default {
  components: { ExperienceCard },
  props: {
    id: { type: String, require: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find((d) => d.id === parseInt(this.id));
    },
  },
};
</script>