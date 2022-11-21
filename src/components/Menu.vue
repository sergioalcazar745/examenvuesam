<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Examen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Cubos</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Marcas
                    </a>
                    <ul class="dropdown-menu">
                        <li v-for="marca in marcas" :key="marca">
                            <router-link :to="'/' + marca" class="dropdown-item">{{marca}}</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/auth/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/perfil/usuario" class="nav-link">Perfil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/insertar/pedido" class="nav-link">Insertar</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/registro/usuario" class="nav-link">Registro</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/sesion/logout" class="nav-link">Logout</router-link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import CuboService from "./../services/cubo.service";

const service = new CuboService();

export default {
    name: 'MenuComponent',

    data() {

        return {
            marcas: []
        };

    },

    methods: {

        getMarcas(){

            service.getMarcas().then(result => {
                this.marcas = result;
            })

        }

    },

    mounted() {

        this.getMarcas()

    },

};
</script>

<style scoped>

</style>