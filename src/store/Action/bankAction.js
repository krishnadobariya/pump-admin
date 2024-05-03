import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_BANKS = "GET_ALL_BANKS";


const getAllBank = (payload) => ({ type: GET_ALL_BANKS, payload: payload.data });


export const getAllBanksAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/Banks/v1/getAllBank`).then((res) => {
                dispatch(getAllBank(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllBank(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}