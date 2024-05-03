import { GET_ALL_CASHFLOW } from "store/Action/cashFlowAction";
import { ADD_CASHFLOW } from "store/Action/cashFlowAction";

export const initialState = {
  getAllCashFlow: "",
  addCashFlow: "",
  
};

const cashFlowReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CASHFLOW:
      return { ...state, getAllCashFlow: action.payload };
    case ADD_CASHFLOW:
      return { ...state, addCashFlow: action.payload };
    default:
      return state;
  }
};

export default cashFlowReducer;
