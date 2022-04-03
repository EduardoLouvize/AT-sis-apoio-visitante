<template>
     <div class="registro">
            <aviso/>
        <h1>Login</h1>
               <div class="error">
                    <div  class="error" v-if="alerta.error" :style="alerta.bgc">
                        <div>{{alerta.msg}}</div>
                        <div class="fechar" @click="fechar">X</div>
                    </div>
                     </div>



         <div class="input-box">
                <img src="/images/userr.png" alt="">
                <input type="text" placeholder="Usuário" v-model="user">
         </div>
          <span class="linha-registro"></span>

         <div class="input-box">
                <img src="/images/senhaaa.png" alt="">

                <input type="password" placeholder="Senha" v-model="senha">
        </div>
        <span class="linha-registro"></span>
        <div class="esqueci"><a href="">Esqueci minha senha senha</a></div>
         

          <div class="registro-button">
                   <button @click="verificar">Entrar</button>

          </div>

    </div>
</template>


<script>
import  aviso  from "./aviso.vue";
export default {

              components: {
              aviso
       },
       data() {
              return {
                     user: '',
                     senha: '',
                     alerta: {
                             msg:'',
                             error:false,
                            sucesso: false,
                            bgc: {
                                   backgroundColor: ''}
                             }
              }
       },

       methods: {
              verificar: function verificar() {
                     var correto = true
                     if (this.user == '' || this.senha == '') {

                             this.alerta.msg = 'Preencha todos os campos'
                             this.alerta.error = true
                             this.alerta.bgc.backgroundColor = 'red'
                             correto = false
                     }



                     if (correto == true) {
                            this.$store.dispatch('verificarSenha', {user: this.user, senha: this.senha})

                            if (this.$store.state.logado) {
                            this.$router.push('/')
                                                 
                                                           }

                              if (!this.$store.state.logado) {
                            this.alerta.msg = 'Usuário ou senha incorretos'
                             this.alerta.error = true
                             this.alerta.bgc.backgroundColor = 'red'
                             correto = false
                     
                              }

                           
                     }
                     
              },
               fechar: function fechar() {
            this.alerta.error = false
        }
              
       }

       
}
</script>