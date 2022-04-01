<template>
    <div class="sucesso" v-if="$store.state.alerta">
        <div>Conta criada com sucesso!</div>
        <div @click="fechar" class="fechar">X</div>
    </div>


</template>




<script>
export default {
   methods: {
       fechar: function name() {
           this.$store.dispatch('fechar', false)

       }
   }
}
</script>