<template>
    <div class="registro-container">
        <div class="registro-img">            
            <img src="/images/imgRegistro.png" alt="">
        </div>
        <Registro/>
    </div>
</template>

<script>
import  Registro  from "@/components/Registro.vue";
export default {
    components: {
        Registro
    }
}
</script>