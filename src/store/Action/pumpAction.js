import axios from "axios";
import { toast } from "react-toastify";

export const ADD_PUMP = "ADD_PUMP";
export const GET_ALL_PUMP = "GET_ALL_PUMP";
export const UPDATE_PUMP = "UPDATE_PUMP"

const pumpAdd = (payload) => ({ type: ADD_PUMP, payload: payload.data });
const getAllPump = (payload) => ({ type: GET_ALL_PUMP, payload: payload.data })
const updatePump = (payload) => ({ type: UPDATE_PUMP, payload: payload.data })

export const pumpAddAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.post(`http://13.235.49.124:8000/api/Pump/v1/registration`, payload).then((res) => {
                toast.success('Pump Add successfully');
                dispatch(pumpAdd(res));
            }).catch((error) => {
                toast.error('Somthing went wrong')
                dispatch(pumpAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
export const getAllManagerAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.get(`http://13.235.49.124:8000/api/v1/getUsers`, payload).then((res) => {
                dispatch(getAllPump(res));
            }).catch((error) => {
                toast.error('Somthing went wrong')
                dispatch(getAllPump(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateManagerAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.put(`http://13.235.49.124:8000/api/v1/userUpdate/${userId}`, updatedData).then((res) => {
                toast.success('Pump Updated Successfully');
                dispatch(updatePump(res));
            }).catch((error) => {
                toast.error('Something went wrong');
                dispatch(updatePump(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

