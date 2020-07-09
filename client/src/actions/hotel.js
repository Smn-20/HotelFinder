import axios from 'axios';
import { HOTEL_ERROR, GET_HOTELS, GET_HOTEL } from './types';

//Get all the hotels
export const getHotels = () => async dispatch => {
    try {
        const res = await axios.get('/hotels/');
        dispatch({
            type:GET_HOTELS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:HOTEL_ERROR,
            payload:{ msg:err.response.statusText, status:err.response.status }
        })
    }
}

//Get an hotel by id
export const getHotelById = hotelId => async dispatch => {
    try {
        const res = await axios.get(`/hotels/hotel/:${hotelId}`);
        dispatch({
            type:GET_HOTEL,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type:HOTEL_ERROR,
            payload:{ msg:err.response.statusText, status:err.response.status }
        })
    }
}