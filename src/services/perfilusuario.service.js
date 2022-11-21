import Global from "@/Global";
import axios from "axios";

export default class PerfilUsuarioService {

    login(user){

        return new Promise(function (resolve){
            var request = Global.url + "api/manage/login";
            // var header = {Authorization, "Bearer"}
            console.log(user)
            axios.post(request, user).then(response => {
                resolve(response.data.response)
            });
        });

    }

    getPerfilUsuario(){

        return new Promise (function(resolve){
            var request = Global.url + "/api/manage/perfilusuario";
            var header = {"Authorization": "Bearer " + localStorage.getItem("token")}
            axios.get(request, {headers: header}).then(response => {
                resolve(response.data)
            })
        }) 

    }

    getComprasByUser(){

        return new Promise(function(resolve) {
            var request = Global.url + "api/compra/comprasusuario";
            var header = {"Authorization": "Bearer " + localStorage.getItem("token")}
            axios.get(request, {headers: header}).then(response => {
                resolve(response.data)
            })
        })

    }

    postPedido(id){

        return  new Promise(function(resolve){            
            var request = Global.url + "/api/compra/insertarpedido/" + id;
            var header = {"Authorization": "Bearer " + localStorage.getItem("token")}
            axios.post(request, "", {headers: header}).then(response => {
                resolve(response.data)
            });
        })        

    }

    registro(user){

        return  new Promise(function(resolve){            
            var request = Global.url + "/api/Manage/registrousuario";
            axios.post(request, user).then(response => {
                resolve(response.data)
            });
        }) 
    }

}