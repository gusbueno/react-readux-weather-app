import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { //set state as empty array by default if is null

    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; // its like state.concat([action.payload.data])
    }
    return state;
}