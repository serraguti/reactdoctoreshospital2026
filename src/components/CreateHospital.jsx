import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    url = Global.urlApiHospitales;

    insertHospital = (event) => {
        event.preventDefault();
        let request = "api/hospitales";
        let hospital = {
            idHospital: parseInt(this.cajaId.current.value), 
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value) 
        }

        axios.post(this.url + request, hospital).then((response) => {
            console.log("Insertado!!!")
            this.setState({
                mensaje: "Hospital insertado: " + hospital.nombre,
                status: true
            })
        })
    }

    state = {
        mensaje: "",
        status: false
    }

    render() {
        return (
        <div>
            {
                this.state.status == true &&
                (<Navigate to="/hospitales"/>)
            }
            <h1>Create Hospital</h1>
            <h3 style={{color:"fuchsia"}}>
                {this.state.mensaje}
            </h3>
            <form>
                <label>Id hospital</label>
                <input type="number" ref={this.cajaId} className="form-control"/>
                <label>Nombre: </label>
                <input type="text" ref={this.cajaNombre} className="form-control"/>
                <label>Dirección: </label>
                <input type="text" ref={this.cajaDireccion} className="form-control"/>
                <label>Teléfono: </label>
                <input type="text" ref={this.cajaTelefono} className="form-control"/>
                <label>Camas: </label>
                <input type="number" ref={this.cajaCamas} className="form-control"/>
                <button onClick={this.insertHospital} className="btn btn-warning">
                    Create
                </button>
            </form>
        </div>
        )
    }
}
