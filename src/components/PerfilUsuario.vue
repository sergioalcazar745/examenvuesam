<template>
    <div class="container">
        <h1 class="my-5">Perfil usuario</h1>
        <form>
            <div class="mt-3">
                <label class="form-label">Nombre: </label>
                <input type="text" class="form-control" name="cajanombre" :value="perfil.nombre"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Email: </label>
                <input type="text" class="form-control" name="cajaemail" :value="perfil.email"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Password: </label>
                <input type="text" class="form-control" name="cajapassword" :value="perfil.pass"/>
            </div>
        </form>
        <hr/>
        <h2 class="mb-5">Compras</h2>
        <div class="row">
            <div v-for="compra in comprasFilter" :key="compra" class="card col-4" style="width: 18rem;">
                <img :src="compra.cubo.imagen" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{compra.cubo.nombre}}</h5>
                    <p class="card-text">{{compra.fecha}}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <!-- <span style="font-weight: bold;">Nombre cubo: </span> {{compra.cubo.nombre}} || <span style="font-weight: bold;">Fecha: </span> {{compra.fecha}} -->
        </div>
    </div>
</template>

<script>
import PerfilUsuarioService from "./../services/perfilusuario.service";
import CuboService from "./../services/cubo.service";

const service = new PerfilUsuarioService();
const serviceCubo = new CuboService();

export default {
    name: 'PerfilUsuario',

    data() {
        return {
            perfil: {
                nombre: null, 
                email: null, 
                pass: null
            },

            compras:[],
            comprasFilter: []
        };
    },

    methods: {

        getPerfilUsuario(){

            service.getPerfilUsuario().then(result => {
                this.perfil = result;
                console.log(this.perfil)
            })

        },

        getComprasByUser(){

            service.getComprasByUser().then(result => {
                this.compras = result;
                this.getComprasFilter();
            });

        },

        getComprasFilter(){

            for (let compra of this.compras) {
                serviceCubo.getCubo(compra.idCubo).then(result => {
                    console.log(result)
                    this.comprasFilter.push({cubo: result, fecha: compra.fechaPedido})
                });
            }

        }

    },

    mounted() {

        if(localStorage.getItem("token") != null){                
            this.getPerfilUsuario();
            this.getComprasByUser();
        }else{
            this.$router.push("/")
        }

    },

};
</script>

<style scoped>

</style>