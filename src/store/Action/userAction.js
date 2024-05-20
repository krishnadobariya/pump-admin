import axios from "axios";
import { toast } from "react-toastify";



export const ADD_USERS = "ADD_USERS"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_ALL_EMPLOYEE = "GET_ALL_EMPLOYEE"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = "DELETE_USER"
export const USER_PROFILE = "USER_PROFILE"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"


const userAdd = (payload) => ({ type: ADD_USERS, payload: payload.data });
const getAllUsers = (payload) => ({ type: GET_ALL_USERS, payload: payload.data });
const getAllEmployee = (payload) => ({ type: GET_ALL_EMPLOYEE, payload: payload.data });
const updateUser = (payload) => ({ type: UPDATE_USER, payload: payload.data });
const deleteUser = (payload) => ({ type: DELETE_USER, payload: payload.data });
const employeeAdd = (payload) => ({ type: ADD_EMPLOYEE, payload: payload.data });


export const userAddAction = (payload) => {
    return async (dispatch) => {
        const requiredFields = ['fullName', 'email', 'mobile', 'role', 'password'];
        const emptyFields = requiredFields.filter(field => !payload[field]);

        if (emptyFields.length > 0) {
            toast.error("Please fill in the following fields!!!");
            return;
        }

        const token = localStorage.getItem('token');
        console.log("Token Retrieved:", token);

        if (!token) {
            toast.error("Authorization token is missing");
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}api/v1/userAdd`,
                payload,
                {
                    headers: {
                        'Authorization': token, 
                    }
                }
            );
            toast.success('User added successfully');
            dispatch(userAdd(response.data));
        } catch (error) {
            console.log("Error Response:", error.response);
            console.log("Error Request:", error.request);
            console.log("Error Message:", error.message);

            if (error.response) {
                toast.error(error.response.data.message || 'An error occurred');
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('An error occurred while sending the request');
            }
            dispatch(userAdd(error?.response));
        }
    };
};

export const employeeAddAction = (payload) => {
    return async (dispatch) => {
        const requiredFields = ['fullName', 'email', 'mobile', 'role', 'password'];
        const emptyFields = requiredFields.filter(field => !payload[field]);

        if (emptyFields.length > 0) {
            toast.error("Please fill in the following fields!!!");
            return;
        }

        const token = localStorage.getItem('token');
        console.log("Token Retrieved:", token);

        if (!token) {
            toast.error("Authorization token is missing");
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}api/v1/employeeAdd`,
                payload,
                {
                    headers: {
                        'Authorization': token, 
                    }
                }
            );
            toast.success('User added successfully');
            dispatch(userAdd(response.data));
        } catch (error) {
            console.log("Error Response:", error.response);
            console.log("Error Request:", error.request);
            console.log("Error Message:", error.message);

            if (error.response) {
                toast.error(error.response.data.message || 'An error occurred');
            } else if (error.request) {
                toast.error('No response received from the server');
            } else {
                toast.error('An error occurred while sending the request');
            }
            dispatch(userAdd(error?.response));
        }
    };
};

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



