import axios from "axios";
import { toast } from "react-toastify";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELTE_CATEGORY = "DELTE_CATEGORY"

const categoryAdd = (payload) => ({ type: ADD_CATEGORY, payload: payload.data });
const getAllCategory = (payload) => ({ type: GET_ALL_CATEGORY, payload: payload.data })
const updateCategory = (payload) => ({ type: UPDATE_CATEGORY, payload: payload.data })
const deleteCategory = (payload) => ({ type: DELTE_CATEGORY, payload: payload.data })


export const categoryAddAction = (payload) => {
    return async (dispatch) => {
        const requiredFields = ['title', 'description', 'pumpId'];
        const emptyFields = requiredFields.filter(field => !payload[field]);

        if (emptyFields.length > 0) {
            // toast.error(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            toast.error("Please fill in the following fields!!!");
            return;
        }
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/categories/v1/create`, payload).then((res) => {
                toast.success('Category Add successfully');
                dispatch(categoryAdd(res));
            }).catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message || 'An error occurred');
                } else if (error.request) {
                    toast.error('No response received from the server');
                } else {
                    toast.error('An error occurred while sending the request');
                }
                dispatch(categoryAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
export const getAllCategoryAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/categories/v1/getAll`).then((res) => {
                dispatch(getAllCategory(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllCategory(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateCategoryAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.patch(`${process.env.REACT_APP_BASE_URL}api/categories/v1/update/${userId}`, updatedData, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Category Updated Successfully');
                dispatch(getAllCategoryAction())
                dispatch(updateCategory(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateCategory(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const deleteCategoryAction = (userId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/categories/v1/deleteOne/${userId}`, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Category Delete Successfully');
                dispatch(getAllCategoryAction())
                dispatch(deleteCategory(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteCategory(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

