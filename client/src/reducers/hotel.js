import { GET_HOTEL, HOTEL_ERROR, GET_HOTELS } from '../actions/types';

const initialState={
    hotel:null,
    hotels:[],
    loading:true,
    error:{}
}

export default function(state=initialState,action){
    const { type, payload } = action;

    switch (type) {
        case GET_HOTEL:
            return {
                ...state,
                hotel:payload,
                loading:false
            }
        case GET_HOTELS:
            return{
                ...state,
                hotels:payload,
                loading:false
            }
        case HOTEL_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state;
    }
}