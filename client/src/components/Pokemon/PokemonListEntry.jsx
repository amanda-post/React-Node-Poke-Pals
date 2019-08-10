import React from 'react';

const PokemonListEntry = (props) => {
  let { name, number, types, abilites, sprites } = props.poke;
  return(
    <div>
      {`${name} - ${number}`}
      <img src={sprites[0]} alt={`pokemon-${props.index}`}></img>
    </div>
  )
}

export default PokemonListEntry;