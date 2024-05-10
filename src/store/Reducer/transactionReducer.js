import { UPDATE_TRANSACTION } from "store/Action/transactionAction";
import { DELETE_TRANSACTION } from "store/Action/transactionAction";
import { ADD_TRANSACTION } from "store/Action/transactionAction";
import { GET_ALL_TRANSACTION } from "store/Action/transactionAction";


export const initialState = {
  getAllTransaction: "",
  transactionAdd: "",
  updateTransaction: "",
  deleteTransaction: "",
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTION:
      return { ...state, getAllTransaction: action.payload };
    case ADD_TRANSACTION:
      return { ...state, transactionAdd: action.payload };
    case UPDATE_TRANSACTION:
      return { ...state, updateTransaction: action.payload };
    case DELETE_TRANSACTION:
      return { ...state, deleteTransaction: action.payload };
    default:
      return state;
  }
};

export default transactionReducer;
