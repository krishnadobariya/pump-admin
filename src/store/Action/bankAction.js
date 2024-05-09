import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_BANKS = "GET_ALL_BANKS";
export const ADD_BANKS = "ADD_BANKS";
export const UPDATE_BANKS = "UPDATE_BANKS";
export const DELETE_BANKS = "UPDATE_BANKS";




const getAllBank = (payload) => ({ type: GET_ALL_BANKS, payload: payload.data });
const updatesBank = (payload) => ({ type: UPDATE_BANKS, payload: payload.data });
const deleteBank = (payload) => ({ type: DELETE_BANKS, payload: payload.data });
const BankAdd = (payload) => ({ type: DELETE_BANKS, payload: payload.data });





export const getAllBanksAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}api/Banks/v1/getAllBank`).then((res) => {
                dispatch(getAllBank(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(getAllBank(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
};


export const AddBankAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/Banks/v1/bankcreate`, payload).then((res) => {
                toast.success('Bank Add successfully');
                dispatch(BankAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(BankAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const updateBankAction = (bankId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/Banks/v1/updateBank/${bankId}`, updatedData, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Credits Updated Successfully');
                dispatch(getAllBank())
                dispatch(updatesBank(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updatesBank(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const deleteBankAction = (bankId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/Banks/v1/deleteBanks/${bankId}`, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Bank Delete Successfully');
                dispatch(getAllBanksAction())
                dispatch(deleteBank(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteBank(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};