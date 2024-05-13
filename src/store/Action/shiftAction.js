import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_SHIFT = "GET_ALL_SHIFT";
export const  ADD_SHIFT = "ADD_TRANSACTION";
export const UPDATE_SHIFT = "UPDATE_SHIFT";
export const  DELETE_SHIFT = "DELETE_SHIFT";




const getAllShift = (payload) => ({ type: GET_ALL_SHIFT, payload: payload.data });
const shiftAdd = (payload) => ({ type: ADD_SHIFT, payload: payload.data });
const updateShift = (payload) => ({ type: UPDATE_SHIFT, payload: payload.data });
const deleteShift = (payload) => ({ type: DELETE_SHIFT, payload: payload.data });



export const getAllShiftAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/User/Shift/v1/getAllShift`).then((res) => {
                dispatch(getAllShift(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllShift(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const AddShiftAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/User/Shift/v1/create-Shift`, payload).then((res) => {
                toast.success('Shift Add successfully');
                dispatch(shiftAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(shiftAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}


export const updateShiftAction = (shiftId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/User/Shift/v1/update-Shift/${shiftId}`, updatedData, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Shift Updated Successfully');
                dispatch(getAllShiftAction())
                dispatch(updateShift(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateShift(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};


export const deleteShiftAction = (shiftId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/deleteTransaction/${shiftId}`, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Shift Delete Successfully');
                dispatch(getAllShiftAction())
                dispatch(deleteShift(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteShift(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};