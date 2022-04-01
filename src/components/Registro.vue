<template>
    <div class="registro">
      
        <h1>Registro</h1>
            <div class="error">
                    <div v-if="alerta.error" class="error" :style="alerta.bgc">
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

          <div class="input-box">
                <img src="/images/senhaaa.png" alt="">
           
                <input type="password" placeholder="Confirmar senha" v-model="senhaConfirm">
          </div>
          <span class="linha-registro"></span>
          
          <div class="registro-button">
                   <button @click="salvarSenha">Criar conta</button>

          </div>
    </div>
</template>


<script>
export default {

    data() {
        return {
            user: '',
            senha: '',
            senhaConfirm: '',
            alerta: {
                msg:'',
                error:false,
                sucesso: false,
                bgc: {backgroundColor: ''}
            }

        }
    },
   methods: {





       salvarSenha: function salvarSenha() {
         
            if (this.user == '' || this.senha == '' || this.senhaConfirm == '') {
                this.alerta.msg = 'Preencha todos os campos'
                this.alerta.error = true
                this.alerta.bgc.backgroundColor = 'red'

            }
            else if (String(this.user).length < 5 || String(this.senha).length < 5 || String(this.senhaConfirm).length < 5 ) {
                this.alerta.error = true
                this.alerta.msg = 'Insira no minimo 5 caracteres'  
                 this.alerta.bgc.backgroundColor = 'red'

                }

                else if (String(this.user).length > 10 || String(this.senha).length > 10 || String(this.senhaConfirm).length > 10 ) {
                this.alerta.error = true
                this.alerta.msg = 'Insira no máximo 10 caracteres'  
                 this.alerta.bgc.backgroundColor = 'red'

                }

            else if (this.senha != this.senhaConfirm) {
                this.alerta.error = true
                this.alerta.msg = 'Senhas não coincidem'  
                this.alerta.bgc.backgroundColor = 'red'

}
            else {
                 this.$router.push('login')
                 this.$store.dispatch('salvarSenha', {user: this.user, senha: this.senha})
                  this.$store.dispatch('alertaSucesso', true)

            }









  
        },

        fechar: function fechar() {
            this.alerta.error = false
        }
   }
}
</script>

