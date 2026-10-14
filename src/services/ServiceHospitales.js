import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {
    getHospitales = new Promise(function(resolve) {
        let url = Global.urlApiHospitales;
        let request = "api/hospitales";
        axios.get(url + request).then((response) => {
            console.log("Leyendo hospitales");
            resolve(response.data);
        })
    })
}