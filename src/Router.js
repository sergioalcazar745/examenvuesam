import { createRouter, createWebHistory } from "vue-router";
import CubosComponent from "./components/Cubos.vue";
import LoginComponent from "./components/Login.vue";
import PerfilUsuarioComponent from './components/PerfilUsuario.vue';
import InsertarPedido from './components/InsertarPedido.vue';
import LogoutComponent from './components/Logout.vue';
import RegistroComponent from './components/Registro.vue';

const routes = [
    {
        path: "/:marca?", component: CubosComponent
    },

    {
        path: "/auth/login", component: LoginComponent
    },

    {
        path: "/perfil/usuario", component: PerfilUsuarioComponent
    },

    {
        path: "/insertar/pedido", component: InsertarPedido
    },

    {
        path: "/sesion/logout", component: LogoutComponent
    },

    {
        path: "/registro/usuario", component: RegistroComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;