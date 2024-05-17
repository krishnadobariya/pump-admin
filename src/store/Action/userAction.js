import axios from "axios";
import { toast } from "react-toastify";



export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_ALL_EMPLOYEE = "GET_ALL_EMPLOYEE"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = "DELETE_USER"
export const USER_PROFILE = "USER_PROFILE"


const getAllUsers = (payload) => ({ type: GET_ALL_USERS, payload: payload.data });
const getAllEmployee = (payload) => ({ type: GET_ALL_EMPLOYEE, payload: payload.data });
const updateUser = (payload) => ({ type: UPDATE_USER, payload: payload.data });
const deleteUser = (payload) => ({ type: DELETE_USER, payload: payload.data });


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
export const getAllEmployeeAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/v1/getAllEmployee`).then((res) => {
                console.log("employeee------",res);
                dispatch(getAllEmployee(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllEmployee(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
};

export const updateUserAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.patch(`${process.env.REACT_APP_BASE_URL}api/v1/userUpdate/${userId}`, updatedData).then((res) => {
                toast.success('Manager Updated Successfully');
                dispatch(getAllUsersAction())
                dispatch(getAllEmployeeAction())
                dispatch(updateUser(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateUser(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const deleteUserAction = (userId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/v1/deleteUserById/${userId}`, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('User Delete Successfully');
                dispatch(getAllUsersAction())
                dispatch(getAllEmployeeAction())
                // dispatch(getAllEmployeeAction())
                dispatch(deleteUser(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteUser(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};



