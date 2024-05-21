import axios from "axios";
import { toast } from "react-toastify";

export const GET_ATTENDANCE = "GET_ATTENDANCE";
export const UPDATE_ATTENDANCE = "UPDATE_ATTENDANCE";
export const ADD_ATTENDANCE = "ADD_ATTENDANCE";

const getAttendance = (payload) => ({type: GET_ATTENDANCE, payload: payload.data}); 
const updateAttendance = (payload) => ({type: GET_ATTENDANCE, payload: payload.data}); 
const addAttendance = (payload) => ({type: ADD_ATTENDANCE, payload: payload.data}); 


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
};

export const attendanceAddAction = (payload) => {
    return async (dispatch) => {
      const requiredFields = ["userName", "status"];
      const emptyFields = requiredFields.filter((field) => !payload[field]);
      if (emptyFields.length > 0) {
        toast.error("Please fill in the following fields!!!");
        return;
      }
      try {
        await axios
          .post(
            `${process.env.REACT_APP_BASE_URL}api/attendance/v1/create`,
            payload
          )
          .then((res) => {
            toast.success("Attendance Add successfully");
            dispatch(addAttendance(res));
          })
          .catch((error) => {
            toast.error(error?.response?.data?.message);
            dispatch(addAttendance(error?.response));
          });
      } catch (error) {
        console.log("Error::::", error);
      }
    };
  };


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