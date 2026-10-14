import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DetallesDoctor extends Component {
    url = Global.urlApiDoctores;
    state = {
        doctor: null
    }

    findDoctor = () => {
        let request = "api/doctores/" + this.props.iddoctor;
        axios.get(this.url + request).then((response) => {
            console.log("Find doctor");
            this.setState({
                doctor: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.iddoctor != this.props.iddoctor){
            this.findDoctor();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles Doctor</h1>
                {
                    this.state.doctor &&
                    (<ul className="list-group">
                        <li className="list-group-item">
                            Apellido: {this.state.doctor.apellido}
                        </li>
                        <li className="list-group-item">
                            Especialidad: {this.state.doctor.especialidad}
                        </li>                        
                        <li className="list-group-item">
                            Salario: {this.state.doctor.salario}
                        </li>                        
                        <li className="list-group-item">
                            Hospital: {this.state.doctor.idHospital}
                        </li>                        
                    </ul>)
                }
            </div>
        )
    }
}
