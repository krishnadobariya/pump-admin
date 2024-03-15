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
            await axios.post(`http://43.204.149.24:8000/api/Pump/v1/registration`, payload).then((res) => {
                toast.success('Pump Add successfully');
                dispatch(pumpAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(pumpAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
export const getAllPumpAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.get(`http://43.204.149.24:8000/api/Pump/v1/getAllPumps`).then((res) => {
                dispatch(getAllPump(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllPump(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updatePumpAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.patch(`http://43.204.149.24:8000/api/v1/userUpdate/${userId}`, updatedData).then((res) => {
                toast.success('Pump Updated Successfully');
                dispatch(getAllPumpAction())
                dispatch(updatePump(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(updatePump(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

