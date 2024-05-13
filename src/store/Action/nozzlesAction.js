import axios from "axios";
import { toast } from "react-toastify";

export const ADD_NOZZLES = "ADD_NOZZLES";
export const GET_ALL_NOZZLES = "GET_ALL_NOZZLES";
export const GET_PDF_NOZZLES = "GET_PDF_NOZZLES";
export const UPDATE_NOZZLES = "UPDATE_NOZZLES";
export const DELTE_NOZZLES = "DELTE_NOZZLES";

const nozzlesAdd = (payload) => ({ type: ADD_NOZZLES, payload: payload.data });
const getAllNozzles = (payload) => ({ type: GET_ALL_NOZZLES, payload: payload.data })
const getPdfNozzle = (payload) => ({ type: GET_PDF_NOZZLES, payload: payload.data });
const updateNozzles = (payload) => ({ type: UPDATE_NOZZLES, payload: payload.data })
const deleteNozzles = (payload) => ({ type: DELTE_NOZZLES, payload: payload.data })


export const nozzlesAddAction = (payload) => {
    return async (dispatch) => {
        const requiredFields = ['numberOfNozzles', 'categoryId','description','pumpId'];
        const emptyFields = requiredFields.filter(field => !payload[field]);

        if (emptyFields.length > 0) {
            // toast.error(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            toast.error("Please fill in the following fields!!!");
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/nozzles/v1/create`, payload).then((res) => {
                toast.success('Nozzles Add successfully');
                dispatch(nozzlesAdd(res));
            }).catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message || 'An error occurred');
                } else if (error.request) {
                    toast.error('No response received from the server');
                } else {
                    toast.error('An error occurred while sending the request');
                } 
                dispatch(nozzlesAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
export const getAllNozzlesAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/nozzles/v1/getAll`).then((res) => {
                dispatch(getAllNozzles(res));
                console.log("resssssssssss", res);
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllNozzles(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateNozzlesAction = (userId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.patch(`${process.env.REACT_APP_BASE_URL}api/nozzles/v1/update/${userId}`, updatedData, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Nozzles Updated Successfully');
                dispatch(getAllNozzlesAction())
                dispatch(updateNozzles(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateNozzles(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const getNozzlePdfAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/Reports/v1/calculateNozzleTotals`, payload).then((res) => {
                toast.success('Pdf Download successfully');
                dispatch(getPdfNozzle(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getPdfNozzle(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const deleteNozzlesAction = (userId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/nozzles/v1/deleteOne/${userId}`, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Category Delete Successfully');
                dispatch(getAllNozzlesAction())
                dispatch(deleteNozzles(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteNozzles(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};