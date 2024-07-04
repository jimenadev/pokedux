import { fromJS } from 'immutable'
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "../actions/types"

const initialState = fromJS({
    pokemons: [],
    loading: false,
})

export const pokemonsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_POKEMONS:
            //return {...state, pokemons: action.payload}
            return state.setIn(['pokemons'], fromJS(action.payload))
        // eslint-disable-next-line no-undef
        case SET_FAVORITE:
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
                return pokemon.get('id') === action.payload.pokemonId
            } )

            if(currentPokemonIndex < 0){
                return state
            }

            //newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

            const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite'])
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)
        case SET_LOADING:
            //return {...state, loading: action.payload}
            return state.setIn(['loading'], action.payload) 
        default:
            return state
    }
}