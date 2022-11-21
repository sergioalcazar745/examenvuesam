<template>
    <div class="bg-dark" style="height: 100vh;">
        <div class="container py-5">
            <form class="w-50 m-auto d-block border p-5 border-light rounded" style="color: white" method="post" @submit.prevent="login()">
                <h2 class="my-3">Login</h2>
                <div class="mt-3">
                    <label class="form-label">Usuario</label>
                    <input type="text" class="form-control" v-model="user.email"/>
                </div>
                <div class="mt-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="user.password"/>
                </div>
                <button class="btn btn-primary btn-auto mt-3">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import PerfilUsuarioService from "./../services/perfilusuario.service";

const service = new PerfilUsuarioService();

export default {
    name: 'LoginComponent',

    data() {
        return {
            user: {
                email:null,
                password: null
            }
        };
    },

    methods: {

        login(){

            service.login(this.user).then(result => {
                localStorage.setItem("token", result)
                this.$router.push("/")
            })

        }

    },

    mounted() {
    
        if(localStorage.getItem("token") != null){
            console.log("hola")
            this.$router.push("/")
        }

    },

};
</script>

<style scoped>

</style>