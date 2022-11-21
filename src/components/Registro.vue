<template>
    <div class="bg-dark" style="height: 100vh;">
    <div class="container py-5">
        <form class="w-50 m-auto d-block border p-5 border-light rounded" style="color: white" @submit.prevent="registro()">
            <h2 class="my-3">Registro</h2>
            <div class="mt-3">
                <label class="form-label">Nombre: </label>
                <input type="text" class="form-control" v-model="user.nombre"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Email: </label>
                <input type="text" class="form-control" v-model="user.email"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Password: </label>
                <input type="password" class="form-control" v-model="user.pass"/>
            </div>
            <button class="btn btn-primary btn-auto mt-3">Registro</button>
        </form>
    </div>
</div>
</template>

<script>
import PerfilUsuarioService from "./../services/perfilusuario.service";

const service = new PerfilUsuarioService();

export default {
    name: 'RegistroComponent',

    data() {
        return {
            user: {
                idUsuario: 0,
                nombre: null,
                email: null,
                pass: null
            }
        };
    },

    methods: {

        registro(){

            service.registro(this.user).then(() => {
                this.$router.push("/")
            });

        },
        
    },

    mounted() {
    },

};
</script>

<style scoped>

</style>