import { ADD_TRANSACTION } from "store/Action/transactionAction";
import { GET_ALL_TRANSACTION } from "store/Action/transactionAction";


export const initialState = {
    getAllTransaction: "",
    transactionAdd: "",
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTION:
      return { ...state, getAllTransaction: action.payload };
    case ADD_TRANSACTION:
      return { ...state, transactionAdd: action.payload };
    default:
      return state;
  }
};

export default transactionReducer;
