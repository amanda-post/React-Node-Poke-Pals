import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentWillMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios
      .get(`/api/poke/${this.props.username}`)
      .then(({data}) => {
        this.setState({
          pokemon: data[0].pokemon
        })
      })
      .catch(err => console.log(`Error getting pokemon for user: ${this.props.username}.`, err));
  }

  render() {
    return(
      <div class="col container border">
        This is the Pokemon div!
        <PokemonList pokes={this.state.pokemon}/>
      </div>
    )
  }
};

export default Pokemon;