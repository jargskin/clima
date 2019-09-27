import React, { useState } from 'react'

function Formulario({datosConsulta}) {
    //busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const consultarClima = e => {
        e.preventDefault();
        //pasar hacia el componente padre la busqueda del usuario
        datosConsulta(busqueda);
    }
    return ( 
        <form
            onSubmit={consultarClima}
        >
            <div className = "input-field  col s12" >
                <input 
                    type = "text"
                    name = "ciudad"
                    id = "ciudad"
                    onChange = { handleChange }
                    /> 
                <label htmlFor= "ciudad" > Ciudad: </label> 
            </div> 
            <div className= "input-field col s12" >
                <select onChange = { handleChange } name = "pais">
                    <option value = "" > Selecciona un Pais </option> 
                    <option value = "US" > EEUU </option> 
                    <option value = "MX" > Mexico </option> 
                    <option value = "AR" > Argentina </option> 
                    <option value = "CR" > Costa Rica </option> 
                    <option value = "CO" > Colombia </option> 
                    <option value = "ES" > Espana </option> 
                    <option value = "PE" > Peru </option> 
                </select> 
            </div> 
            <div className= "input-field col s12" >
                <input type = "submit" className= "waves-effect waves-light btn-large btn-block yellow " value="Buscar Clime" />
            </div> 
        </form>
    )
}

export default Formulario;