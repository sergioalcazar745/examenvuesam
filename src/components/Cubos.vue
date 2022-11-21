<template>
    <div class="container">
        <h1 class="my-5">Cubos {{$route.params.marca}}</h1>
        <div class="d-flex justify-content-center" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="row" v-if="!loading">
            <div class="col-4" v-for="cubo in cubos" :key="cubo">
                <div class="card" style="width: 18rem;">
                    <img :src="cubo.imagen" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{cubo.nombre}}</h5>
                        <p class="card-text">Marca: {{cubo.marca}}<br/>Precio: {{cubo.precio}}</p>
                        <router-link class="btn btn-primary" :to="'/detalle' + cubo.idCubo">Detalles</router-link>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import CuboService from "./../services/cubo.service";

const service = new CuboService();

export default {
    name: 'CubosComponent',

    data() {
        return {
            cubos: [],
            loading: true
        };
    },

    methods: {

        getInit(){
            if(this.$route.params.marca != ""){
                this.getCubosByMarca();
            } else {
                this.getCubos();
            }

        },

        getCubos(){

            this.loading = true;
            service.getCubos().then(result => {
                this.cubos = result;
                this.loading = false;
            });

        },

        getCubosByMarca(){

            this.loading = true;
            service.getCubosByMarcas(this.$route.params.marca).then(result => {
                this.cubos = result;
                this.loading = false;
            });

        },

    },

    watch: {

        '$route.params.marca'(newVal, oldVal){
            if(newVal != oldVal){
                if(oldVal != "" && newVal == ""){
                    this.getCubos();
                }else{
                    this.getCubosByMarca();
                }
            }
        }

    },

    mounted() {

        this.getInit();

    },

};
</script>

<style scoped>

</style>