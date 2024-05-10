import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_CREDITS = "GET_ALL_CREDITS";
export const UPDATE_CREDITS = "UPDATE_CREDITS";
export const  DELETE_CREDITS = "DELETE_CREDITS";
export const  ADD_CREDITS = "ADD_CREDITS";




const getAllCredits = (payload) => ({ type: GET_ALL_CREDITS, payload: payload.data });
const updateCredits = (payload) => ({ type: UPDATE_CREDITS, payload: payload.data });
const deleteCredits = (payload) => ({ type: DELETE_CREDITS, payload: payload.data });
const creditAdd = (payload) => ({ type: ADD_CREDITS, payload: payload.data });



export const getAllCreditsAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/getAll`).then((res) => {
                dispatch(getAllCredits(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllCredits(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const AddCreditAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/create-credits`, payload).then((res) => {
                toast.success('Credits Add successfully');
                dispatch(creditAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(creditAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateCreditsAction = (creditsId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/update-credits/${creditsId}`, updatedData, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Credits Updated Successfully');
                dispatch(getAllCreditsAction())
                dispatch(updateCredits(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateCredits(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};


export const deleteCreditsAction = (creditsId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/deleteCredits/${creditsId}`, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('credits Delete Successfully');
                dispatch(getAllCreditsAction())
                dispatch(deleteCredits(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteCredits(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};