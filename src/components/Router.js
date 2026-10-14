import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import DoctoresComponent from './DoctoresComponent';
import CreateHospital from './CreateHospital';
import HospitalesComponent from './HospitalesComponent';
import EjemploServiceComponent from './EjemploServiceComponent';

export default class Router extends Component {
    render() {
        function DoctoresElement() {
            let {idhospital} = useParams();
            return (<DoctoresComponent idhospital={idhospital}/>)
        }

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/doctores/:idhospital" element={<DoctoresElement/>}/>
                    <Route path="/createhospital" element={<CreateHospital/>}/>
                    <Route path="/hospitales" element={<HospitalesComponent/>}/>
                    <Route path="/ejemplos" element={<EjemploServiceComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
