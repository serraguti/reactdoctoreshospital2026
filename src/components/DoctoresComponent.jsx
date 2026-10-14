import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import DetallesDoctor from './DetallesDoctor';

export default class DoctoresComponent extends Component {
    url = Global.urlApiDoctores;
    
    state = {
        doctores: [],
        iddoctor: -1
    }

    loadDoctoresHospital = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idhospital;
        axios.get(this.url + request).then((response) => {
            console.log("Leyendo doctores");
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital != this.props.idhospital){
            this.loadDoctoresHospital();
            this.setState({
                iddoctor: -1
            })
        }
    }

    render() {
        return (
        <div>
            {
                this.state.iddoctor != -1 &&
                (<DetallesDoctor iddoctor={this.state.iddoctor}/>)
            }
            <h1>
                Doctores del hospital {this.props.idhospital}
            </h1>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th></th>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Salario</th>
                        <th>Hospital</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.doctores.map((doc, index) => {
                            return (<tr key={index}>
                                <td>
                                    <button className="btn btn-danger"
                                    onClick={() => {
                                        this.setState({
                                            iddoctor: doc.idDoctor
                                        })  
                                    }}>
                                        Details
                                    </button>
                                </td>
                                <td>{doc.apellido}</td>
                                <td>{doc.especialidad}</td>
                                <td>{doc.salario}</td>
                                <td>{doc.idHospital}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}
