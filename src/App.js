import { Col } from 'antd';
import { connect } from 'react-redux'
import './App.css';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg'
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions'

function App({pokemons, setPokemons}) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()
      setPokemons(pokemonsRes)
    }

    fetchPokemons()
  }, [])


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
      <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps = (state => ({
  pokemons: state.pokemons,
}))

const mapDispatchToProps = (dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
}))

export default connect(mapStateToProps, mapDispatchToProps)(App);
