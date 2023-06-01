import React, { useState } from 'react';
import Card from './Card';
function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [datos, setDatos] = useState({
    nombreCancion: '',
    artista: ''
  });

  const manejarCambios = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value.trimStart()
    });
  };




  return (
    <div className="App">
      <h1>Elige un artista</h1>
      <form>
        
      

        <label>
          Nombre de la canción:
          <input type="text" name="nombreCancion" value={datos.nombreCancion} onChange={manejarCambios} />
        </label>
        <br />
        <label>
          Artista:
          <input type="text" name="artista" value={datos.artista} onChange={manejarCambios} />
        </label>
        <br />
        <button type="submit">Enviar</button>
        </form>
        <Card nombreCancion={datos.nombreCancion} artista={datos.artista} />

    </div>
  );
}

export default App;
