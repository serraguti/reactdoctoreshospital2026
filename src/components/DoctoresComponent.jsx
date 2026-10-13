import React, { Component } from 'react'

export default class DoctoresComponent extends Component {
    render() {
        return (
        <div>
            <h1>
                Doctores del hospital {this.props.idhospital}
            </h1>
        </div>
        )
    }
}
