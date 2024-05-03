import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_CREDITS = "GET_ALL_CREDITS";


const getAllCredits = (payload) => ({ type: GET_ALL_CREDITS, payload: payload.data });


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