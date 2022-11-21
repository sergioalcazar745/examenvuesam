import Global from "@/Global"
import axios from "axios";

export default class CuboService{

    getCubos(){

        return new Promise(function(resolve){
            var request = Global.url + "api/cubos";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })

    }

    getCubo(id){

        return new Promise(function(resolve){
            var request = Global.url + "api/cubos/" + id;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })

    }

    getMarcas(){

        return new Promise(function(resolve){
            var request = Global.url + "api/cubos/marcas";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
        
    }

    getCubosByMarcas(marca){

        return new Promise(function(resolve){
            var request = Global.url + "/api/cubos/cubosmarca/" + marca;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
        
    }

}