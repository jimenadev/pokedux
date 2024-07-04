import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import{getPokemon,getPokemonDetails}from '../api';
import{ setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
    search: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon()
        const pokemonsDetailed = await Promise.all(pokemonsRes.map((pokemon) => getPokemonDetails(pokemon)))
        dispatch(setPokemons(pokemonsDetailed))
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite:  (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId
            } )

            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite
                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }
        },
        setSearch: (state, action) => {
            state.search = state.pokemons.filter(poke => poke.name.includes(action.payload))
        }
    ,},});

export const { setPokemons, setFavorite, setSearch } = dataSlice.actions
export default dataSlice.reducer
