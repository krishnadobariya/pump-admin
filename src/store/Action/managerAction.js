import axios from "axios";
import { toast } from "react-toastify";

export const ADD_MANAGER = "ADD_MANAGER";
export const GET_ALL_MANAGERS = "GET_ALL_MANAGERS";
export const UPDATE_MANAGER = "UPDATE_MANAGER"

const managerAdd = (payload) => ({ type: ADD_MANAGER, payload: payload.data });
const getAllManager = (payload) => ({ type: GET_ALL_MANAGERS, payload: payload.data })
const updateManager = (payload) => ({ type: UPDATE_MANAGER, payload: payload.data })

export const managerAddAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.post(`http://13.201.102.180:8000/api/v1/registration`, payload).then((res) => {
                toast.success('Manager Add successfully');
                dispatch(managerAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(managerAdd(error?.response))
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
            await axios.get(`http://13.201.102.180:8000/api/v1/getUsers`).then((res) => {
                dispatch(getAllManager(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllManager(error?.response))
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
            await axios.patch(`http://13.201.102.180:8000/api/v1/userUpdate/${userId}`, updatedData).then((res) => {
                toast.success('Manager Updated Successfully');
                dispatch(getAllManagerAction())
                dispatch(updateManager(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateManager(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

