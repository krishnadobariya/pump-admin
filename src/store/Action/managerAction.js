import axios from "axios";
import { toast } from "react-toastify";

export const ADD_MANAGER = "ADD_MANAGER";
export const GET_ALL_MANAGERS = "GET_ALL_MANAGERS";
export const UPDATE_MANAGER = "UPDATE_MANAGER"
export const DELETE_MANAGER = "DELETE_MANAGER"
export const VIEW_MANAGER = "VIEW_MANAGER"

const managerAdd = (payload) => ({ type: ADD_MANAGER, payload: payload.data });
const getAllManager = (payload) => ({ type: GET_ALL_MANAGERS, payload: payload.data })
const updateManager = (payload) => ({ type: UPDATE_MANAGER, payload: payload.data })
const deleteManager = (payload) => ({ type: DELETE_MANAGER, payload: payload.data })
const ViewManager = (payload) => ({ type: VIEW_MANAGER, payload: payload.data })


export const managerAddAction = (payload) => {
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
                `${process.env.REACT_APP_BASE_URL}api/v1/adminAddManager`,
                payload,
                {
                    headers: {
                        'Authorization': token, 
                    }
                }
            );
            toast.success('Manager added successfully');
            dispatch(managerAdd(response.data));
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
            dispatch(managerAdd(error?.response));
        }
    };
};

export const getAllManagerAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/v1/getAllManager`).then((res) => {
                dispatch(getAllManager(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllManager(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateManagerAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.patch(`${process.env.REACT_APP_BASE_URL}api/v1/userUpdate/${userId}`, updatedData).then((res) => {
                toast.success('Manager Updated Successfully');
                dispatch(getAllManagerAction())
                dispatch(updateManager(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateManager(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const deleteManagerAction = (userId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/v1/deleteUserById/${userId}`, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Manager Delete Successfully');
                dispatch(getAllManagerAction())
                dispatch(deleteManager(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteManager(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const ViewManagerAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.patch(`${process.env.REACT_APP_BASE_URL}api/v1/getUserById/${userId}`, updatedData).then((res) => {
                toast.success('Manager Updated Successfully');
                // dispatch(getAllManagerAction())
                dispatch(ViewManager(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(ViewManager(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};
