import axios from 'axios';

const initialState ={
    loading: null,
    characters: []
}

const GET_CHARACTERS = 'GET_CHARACTERS';

function getStarWarsCharacters(){
    return {
        type: GET_CHARACTERS,
        payload: axios.get('https://swapi.co/api/people')
    }
}

function reducer(state=initialState, action){
    switch(action.type){
        case `${GET_CHARACTERS}_FULFILLED`: 
        default: return state
    }

}

export default reducer();