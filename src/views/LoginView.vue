<template>
  <div class="registro-container">
    <div class="registro-img">
      <img src="/images/imgRegistro.png" alt="" />
    </div>
    <Login />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style>
.a {
  color: red;
}
</style>