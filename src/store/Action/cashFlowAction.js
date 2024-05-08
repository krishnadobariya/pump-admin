import axios from "axios";
import { toast } from "react-toastify";

export const GET_ALL_CASHFLOW = "GET_ALL_CASHFLOW";
export const ADD_CASHFLOW = "ADD_CASHFLOW";
export const UPDATE_CASHFLOW = "UPDATE_CASHFLOW";
export const DELETE_ASSETS = "DELETE_ASSETS";

const updateCashflow = (payload) => ({
  type: UPDATE_CASHFLOW,
  payload: payload.data,
});

const deleteAssets = (payload) => ({ type: DELETE_ASSETS, payload: payload.data });

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

export const updateCashFlowAction = (cashFlowId, updatedData) => {
  return async (dispatch) => {
      try {
          await axios.put(`${process.env.REACT_APP_BASE_URL}api/CashFlow/v1/updateCashFlow/${cashFlowId}`, updatedData, {
              // headers: {
              //     'Authorization': localStorage.getItem('token'),
              // }
          }).then((res) => {
              toast.success('Attendance Updated Successfully');
              dispatch(getAllCashflow())
              dispatch(updateCashflow(res));
          }).catch((error) => {
              console.log(error);
              toast.error(error?.response?.data?.message)
              dispatch(updateCashflow(error?.response));
          });
      } catch (error) {
          console.log("Error::::", error);
      }
  };
};

export const deleteCashflowAction = (cashFlowId) => {
  return async (dispatch) => {
      try {
          await axios.delete(`${process.env.REACT_APP_BASE_URL}api/CashFlow/v1/deleteCashFlow/${cashFlowId}`, {
              // headers: {
              //     'Authorization': localStorage.getItem('token'),
              // }
          }).then((res) => {
              toast.success('Cashflow Delete Successfully');
              dispatch(getAllCashFlowAction())
              dispatch(deleteAssets(res));
          }).catch((error) => {
              console.log(error);
              toast.error(error?.response?.data?.message)
              dispatch(deleteAssets(error?.response));
          });
      } catch (error) {
          console.log("Error::::", error);
      }
  };
};
