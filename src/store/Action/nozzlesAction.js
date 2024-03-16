import axios from "axios";
import { toast } from "react-toastify";

export const ADD_NOZZLES = "ADD_NOZZLES";
export const GET_ALL_NOZZLES = "GET_ALL_NOZZLES";
export const UPDATE_NOZZLES = "UPDATE_NOZZLES";
export const DELTE_NOZZLES = "DELTE_NOZZLES";

const nozzlesAdd = (payload) => ({ type: ADD_NOZZLES, payload: payload.data });
const getAllNozzles = (payload) => ({ type: GET_ALL_NOZZLES, payload: payload.data })
const updateNozzles = (payload) => ({ type: UPDATE_NOZZLES, payload: payload.data })
const deleteNozzles = (payload) => ({ type: DELTE_NOZZLES, payload: payload.data })


export const nozzlesAddAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.post(`http://43.204.149.24:8000/api/nozzles/v1/create`, payload).then((res) => {
                toast.success('Nozzles Add successfully');
                dispatch(nozzlesAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(nozzlesAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
export const getAllNozzlesAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.get(`http://43.204.149.24:8000/api/nozzles/v1/getAll`).then((res) => {
                dispatch(getAllNozzles(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllNozzles(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateNozzlesAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.patch(`http://43.204.149.24:8000/api/nozzles/v1/update/${userId}`, updatedData, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Nozzles Updated Successfully');
                dispatch(getAllNozzlesAction())
                dispatch(updateNozzles(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateNozzles(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const deleteNozzlesAction = (userId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`http://43.204.149.24:8000/api/nozzles/v1/deleteOne/${userId}`, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Category Delete Successfully');
                dispatch(getAllNozzlesAction())
                dispatch(deleteNozzles(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteNozzles(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};