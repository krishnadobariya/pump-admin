import axios from "axios";
import { toast } from "react-toastify";

export const GET_ATTENDANCE = "GET_ATTENDANCE";
export const UPDATE_ATTENDANCE = "UPDATE_ATTENDANCE";

const getAttendance = (payload) => ({type: GET_ATTENDANCE, payload: payload.data}); 
const updateAttendance = (payload) => ({type: GET_ATTENDANCE, payload: payload.data}); 


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


export const updateAttendanceAction = (attendanceId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/attendance/v1/update/${attendanceId}`, updatedData, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Attendance Updated Successfully');
                dispatch(getAllAttendanceAction())
                dispatch(updateAttendance(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateAttendance(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};