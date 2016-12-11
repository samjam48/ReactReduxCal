import { FETCH_DATA } from '../actions/index';

export default function(state=[], action){
    console.log('data action: ', action)
    switch (action.type) {
        case FETCH_DATA:
            console.log(action.payload)
            return [ ...action.payload.data]; //add new data to front of our state array

    }
    
    return state;
}
