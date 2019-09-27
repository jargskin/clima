import React, { useState } from 'react';
import Header from './components/commons/Header';
import Formulario from './components/Formulario';
import Error from './components/commons/Error';

function App() {

  // state principal
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);

  const datosConsulta = datos => {

    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }


    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);

  }


  let componente;
  if(error){
    //hay error mostrar
    componente = <Error mensaje='Ambos campos son requeridos' />

  }else {
    //mostrar clima
    componente = null; 
  }

  return (
    <div className="App">
      <Header
        titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;



