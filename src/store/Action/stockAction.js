import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_STOCK = "GET_ALL_STOCK";
export const ADD_STOCK = "ADD_STOCK";

const stockAdd = (payload) => ({ type: ADD_STOCK, payload: payload.data });
const getAllStock = (payload) => ({ type: GET_ALL_STOCK, payload: payload.data })


export const stockAddAction = (payload) => {
    return async (dispatch) => {
        const requiredFields = ['userId', 'categoryId', 'stockDate', 'receipts', 'invoice_date', 'receipts_amount', 'receipts_quantity', 'tanker_no', 'invoice_no'];
        const emptyFields = requiredFields.filter(field => !payload[field]);

        if (emptyFields.length > 0) {
            // toast.error(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            toast.error("Please fill in the following fields!!!");
            return; 
        }

        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/userStock/v1/userCreateStock`, payload).then((res) => {
                console.log("-----------------",payload);
                toast.success('Nozzles Add successfully');
                dispatch(stockAdd(res));
            }).catch((error) => {
                if (error.response) {
                    toast.error(error.response.data.message || 'An error occurred');
                } else if (error.request) {
                    toast.error('No response received from the server');
                } else {
                    toast.error('An error occurred while sending the request');
                }
                dispatch(stockAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}


export const getAllStockAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/userStock/v1/getAll`).then((res) => {
                dispatch(getAllStock(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllStock(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}
