<template>
  <div id="nav">
    <router-link id="logo" to="/">logo</router-link>
    <div>
      <div class="user" v-if="$store.state.logado">
        <img src="/images/userr.png" alt="" />
        <div>{{ $store.state.userNow }}</div>
        <button @click="logout">Logout</button>
      </div>
      <div v-if="!$store.state.logado" class="btn-nav">
        <router-link id="logo" to="/registro">
          <button>Cadastro</button>
        </router-link>
        <router-link id="logo" to="/login">
          <button>Login</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function logout() {
      this.$store.dispatch("logout", false);
    },
  },
};
</script>