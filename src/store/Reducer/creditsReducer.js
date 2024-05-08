import { GET_ALL_CREDITS } from "store/Action/creditsAction";
import { UPDATE_CREDITS } from "store/Action/creditsAction";

export const initialState = {
  getAllCredits: "",
  updateCredits: "",
};

const creditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CREDITS:
      return { ...state, getAllCredits: action.payload };
    case UPDATE_CREDITS:
      return { ...state, updateCredits: action.payload };
    default:
      return state;
  }
};

export default creditsReducer;
