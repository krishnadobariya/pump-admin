import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_CREDITS = "GET_ALL_CREDITS";
export const UPDATE_CREDITS = "UPDATE_CREDITS";


const getAllCredits = (payload) => ({ type: GET_ALL_CREDITS, payload: payload.data });
const updateCredits = (payload) => ({ type: UPDATE_CREDITS, payload: payload.data });


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


export const updateCreditsAction = (creditsId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/Credits/v1/update-credits/${creditsId}`, updatedData, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Credits Updated Successfully');
                dispatch(getAllCredits())
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