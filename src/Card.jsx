

import React from 'react';

function Card(props) {
  return (
    <div>
      <h2>
      <h2>Holaaaa</h2>
      <p>Nombre de la canción: {props.nombreCancion}</p>
      <p>Artista: {props.artista}</p>
      </h2>
    </div>
  );
}

export default Card;
