<template>
    <div class="registro-container">
        <div class="registro-img">            
            <img src="/images/imgRegistro.png" alt="">
        </div>
        <registro/>
    </div>
</template>



<script>
import  registro  from "@/components/Registro.vue";
export default {
    components: {
        registro
    }
}
</script>