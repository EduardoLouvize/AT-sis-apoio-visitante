<template>
  <div id="nav">

    <router-link id="logo" to="/">logo</router-link>
    <div>
      <div v-if="!$store.state.logado">
          <router-link id="logo" to="/registro">Registro</router-link>
        <router-link id="logo" to="/login">Login</router-link>

      </div>

      <div class="user" v-if="$store.state.logado">
          <img src="/images/userr.png" alt="">
          <div> {{$store.state.userNow}}</div>
          <button @click="logout">Logout</button>
      </div>
    
    <router-link id="logo" to="/">Onde Ir</router-link>
    <div class="btn-nav">
      <button>Cadastro</button>
      <button>Login</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    logout: function logout() {
           this.$store.dispatch('logout', false)
    }
  }
}
</script>