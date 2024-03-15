import axios from "axios";
import { toast } from "react-toastify";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"

const categoryAdd = (payload) => ({ type: ADD_CATEGORY, payload: payload.data });
const getAllCategory = (payload) => ({ type: GET_ALL_CATEGORY, payload: payload.data })
const updateCategory = (payload) => ({ type: UPDATE_CATEGORY, payload: payload.data })

export const categoryAddAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.post(`http://43.204.149.24:8000/api/categories/v1/create`, payload).then((res) => {
                toast.success('Category Add successfully');
                dispatch(categoryAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(categoryAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
export const getAllCategoryAction = (payload) => {
    return async (dispatch) => {
        console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
        try {
            await axios.get(`http://43.204.149.24:8000/api/categories/v1/getAll`).then((res) => {
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
            await axios.patch(`http://43.204.149.24:8000/api/categories/v1/update/${userId}`, updatedData).then((res) => {
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

