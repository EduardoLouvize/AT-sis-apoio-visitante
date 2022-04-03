<template>
<div class="registro-container">
        <div class="registro-img">            
            <img src="/images/imgRegistro.png" alt="">
        </div>
        <login/>
        

        
    </div>
</template>



<script>
import  login  from "@/components/login.vue";
export default {
    components: {
        login
    }
}
</script>

<style>
    .a  {
        color: red;
    }
</style>