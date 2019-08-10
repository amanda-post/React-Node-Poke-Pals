import React from 'react';
import PokemonListEntry from './PokemonListEntry.jsx';

const PokemonList = (props) => {
  return(
    <div class="row justify-content-center">
      {props.poke.map((poke, i) => (
        <PokemonListEntry key={i} index={i} poke={poke}/>
      ))}
    </div>
  )
}

export default PokemonList;