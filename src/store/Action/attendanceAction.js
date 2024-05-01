import axios from "axios";
import { toast } from "react-toastify";

export const GET_ATTENDANCE = "GET_ATTENDANCE";

const getAttendance = (payload) => ({type: GET_ATTENDANCE, payload: payload.data}); 


export const getAllAttendanceAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/attendance/v1/getAll`).then((res) => {
                dispatch(getAttendance(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAttendance(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}