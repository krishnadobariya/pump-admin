import axios from "axios";
import { toast } from "react-toastify";


export const GET_ALL_EXPENSES = "GET_ALL_EXPENSES";
export const UPDATE_EXPENSES = "UPDATE_EXPENSES";
export const DELETE_EXPENSES = "DELETE_EXPENSES";
export const ADD_EXPENSES = "ADD_EXPENSES";

const getAllExpenses = (payload) => ({ type: GET_ALL_EXPENSES, payload: payload.data });
const updateExpenses = (payload) => ({ type: UPDATE_EXPENSES, payload: payload.data });
const deleteExpenses = (payload) => ({ type: DELETE_EXPENSES, payload: payload.data });
const expenseAdd = (payload) => ({ type: ADD_EXPENSES, payload: payload.data });


export const expenseAddAction = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}api/Expenses/v1/create-expense`, payload).then((res) => {
                toast.success('Expense Add successfully');
                dispatch(expenseAdd(res));
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
                dispatch(expenseAdd(error?.response))
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    }
}

export const getAllExpensesAction = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}api/Expenses/v1/all-expense`);
            console.log("ressssssssss->>", res);
            dispatch(getAllExpenses(res));

        } catch (error) {
            toast.error(error?.response?.data?.message)
            dispatch(getAllExpenses(error?.response))
            console.log("Error::::", error);
        }
    }
}

export const updateExpensesAction = (expenseId, updatedData) => {
    return async (dispatch) => {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}api/Expenses/v1/update-expense/${expenseId}`, updatedData, {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                }
            }).then((res) => {
                toast.success('Expenses Updated Successfully');
                dispatch(getAllExpensesAction())
                dispatch(updateExpenses(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(updateExpenses(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};

export const deleteExpenseAction = (expenseId) => {
    return async (dispatch) => {
        try {
            // Update the URL and use axios.put for updating data
            await axios.delete(`${process.env.REACT_APP_BASE_URL}api/Expenses/v1/delete-expense/${expenseId}`, {
                // headers: {
                //     'Authorization': localStorage.getItem('token'),
                // }
            }).then((res) => {
                toast.success('Expenes Delete Successfully');
                dispatch(getAllExpensesAction())
                dispatch(deleteExpenses(res));
            }).catch((error) => {
                console.log(error);
                toast.error(error?.response?.data?.message)
                dispatch(deleteExpenses(error?.response));
            });
        } catch (error) {
            console.log("Error::::", error);
        }
    };
};