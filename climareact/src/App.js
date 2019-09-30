import React, { useState, useEffect } from 'react';
import Header from './components/commons/Header';
import Formulario from './components/Formulario';
import Error from './components/commons/Error';
import Clima from './components/Clima';

function App() {

  // state principal
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    //prevenir ejecucion
    if(ciudad === '') return;
    
    const consultarApi = async () => {
      const appId = 'ebc613a65725b4d4a3bb731581d9621d';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
      // consultar la URL
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      guardarResultado(resultado);
       
    }

    consultarApi();
  }, [ ciudad, pais ]);

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

  }else if (resultado.cod === "404") {
    componente = <Error mensaje='Ciudad no existe en nuestro registro' />
  } else {
    //mostrar clima, paso el resultado como props
    componente = <Clima resultado={ resultado } />; 
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



