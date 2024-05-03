import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_CASHFLOW = "GET_ALL_CASHFLOW";
export const ADD_CASHFLOW = "ADD_CASHFLOW";

const getAllCashflow = (payload) => ({
  type: GET_ALL_CASHFLOW,
  payload: payload.data,
});
const addCashFlow = (payload) => ({
  type: ADD_CASHFLOW,
  payload: payload.data,
});

export const getAllCashFlowAction = (payload) => {
  return async (dispatch) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}api/CashFlow/v1/getAll`)
        .then((res) => {
          dispatch(getAllCashflow(res));
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
          dispatch(getAllCashflow(error?.response));
        });
    } catch (error) {
      console.log("Error::::", error);
    }
  };
};

export const cashFlowAddAction = (payload) => {
  return async (dispatch) => {
    const requiredFields = ["name", "category"];
    const emptyFields = requiredFields.filter((field) => !payload[field]);
    if (emptyFields.length > 0) {
      toast.error("Please fill in the following fields!!!");
      return;
    }
    try {
      await axios
        .post(
          `${process.env.REACT_APP_BASE_URL}api/CashFlow/v1/CashFlow-create`,
          payload
        )
        .then((res) => {
          toast.success("cashFlow Add successfully");
          dispatch(addCashFlow(res));
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
          dispatch(addCashFlow(error?.response));
        });
    } catch (error) {
      console.log("Error::::", error);
    }
  };
};
