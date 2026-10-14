import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {
    insertHospital(hospital) {
        return new Promise(function(resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.post(url + request, hospital).then((response) => {
                console.log("Insertando hospital");
                resolve(response);
            })
        })
    }

    getDoctoresHospital(idHospital) {
        return new Promise(function(resolve) {
            let url = Global.urlApiDoctores;
            let request = "api/doctores/doctoreshospital/" + idHospital;
            axios.get(url + request).then((response) => {
                console.log("Leyendo doctores");
                resolve(response.data);
            })
        })
    }

    getHospitales() {
        return new Promise(function(resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.get(url + request).then((response) => {
                console.log("Leyendo hospitales");
                resolve(response.data);
            })
        })
    }
}