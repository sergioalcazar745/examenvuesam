<template>
    <div class="bg-dark" style="height: 100vh;">
        <div class="container py-5">
            <form class="w-50 m-auto d-block border p-5 border-light rounded" @submit.prevent="insertar()">
                <h2 class="my-3" style="color: white;">Insertar pedido</h2>
                <div class="mt-3">
                    <label class="form-label">Cubo</label>
                    <select class="form-select" name="selectcubo" v-model="cubo">
                        <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">{{cubo.nombre}}</option>
                    </select>
                </div>
                <button class="btn btn-primary btn-auto mt-3">Insertar</button>
            </form>
        </div>
    </div>
</template>

<script>
import PerfilUsuarioService from "./../services/perfilusuario.service";
import CuboService from "./../services/cubo.service";

const service = new PerfilUsuarioService();
const serviceCubo = new CuboService();

export default {
    name: 'InsertarPedido',

    data() {
        return {
            cubo: 1,
            cubos: []
        };
    },

    methods: {

        insertar(){

            service.postPedido(this.cubo).then(() => {
                this.$router.push("/perfil/usuario")
            });

        },

        getCubos(){

            serviceCubo.getCubos().then(result => {
                this.cubos = result;
            });

        },

    },

    mounted() {

        if(localStorage.getItem("token") != null){                
            this.getCubos();
        }else{
            this.$router.push("/")
        }

    },

};
</script>

<style scoped>

</style>