import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_TRANSACTION = "GET_ALL_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const ADD_TRANSACTION = "ADD_TRANSACTION";




const getAllTransaction = (payload) => ({ type: GET_ALL_TRANSACTION, payload: payload.data });
const updateTransaction = (payload) => ({ type: UPDATE_TRANSACTION, payload: payload.data });
const deleteTransaction = (payload) => ({ type: DELETE_TRANSACTION, payload: payload.data });
const transactionAdd = (payload) => ({ type: ADD_TRANSACTION, payload: payload.data });



export const getAllTransactionAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/getAllTransaction`).then((res) => {
                dispatch(getAllTransaction(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllTransaction(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const AddTransactionAction = (payload) => {
    return async (dispatch) => {
        const requiredFields = ['customerName', 'transaction_title', 'amount', 'type'];
        const emptyFields = requiredFields.filter(field => !payload[field]);

        if (emptyFields.length > 0) {
            // toast.error(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            toast.error("Please fill in the following fields!!!");
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/createTransaction`, payload).then((res) => {
                toast.success('Transaction Add successfully');
                dispatch(transactionAdd(res));
            }).catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message || 'An error occurred');
                } else if (error.request) {
                    toast.error('No response received from the server');
                } else {
                    toast.error('An error occurred while sending the request');
                }
                dispatch(transactionAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}


export const updateTransactionAction = (transactionId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/updateTransaction/${transactionId}`, updatedData, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Transaction Updated Successfully');
                dispatch(getAllTransactionAction())
                dispatch(updateTransaction(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateTransaction(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};


export const deleteTransactionAction = (transactionId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/Transaction/v1/deleteTransaction/${transactionId}`, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Transaction Delete Successfully');
                dispatch(getAllTransactionAction())
                dispatch(deleteTransaction(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteTransaction(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};