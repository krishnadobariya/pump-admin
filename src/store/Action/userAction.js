import axios from "axios";
import { toast } from "react-toastify";


export const GET_ALL_USERS = "GET_ALL_USERS"

const getAllUsers = (payload) => ({ type: GET_ALL_USERS, payload: payload.data });


export const getAllUsersAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/v1/getAllUsers`).then((res) => {
                console.log("ressssssssss->>",res);
                dispatch(getAllUsers(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllUsers(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}