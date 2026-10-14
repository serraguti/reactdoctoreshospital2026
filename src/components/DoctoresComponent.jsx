import React, { Component } from 'react'
import DetallesDoctor from './DetallesDoctor';
import ServiceHospitales from '../services/ServiceHospitales';

export default class DoctoresComponent extends Component {
    service = new ServiceHospitales();
    
    state = {
        doctores: [],
        iddoctor: -1
    }

    loadDoctoresHospital = () => {
        this.service.getDoctoresHospital(this.props.idhospital).then(result => {
            this.setState({
                doctores: result
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
