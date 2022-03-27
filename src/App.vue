<template>
  <div>
    <div class="container">
      <TheNavigation />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  components: { TheNavigation, AppFooter }
}
</script>