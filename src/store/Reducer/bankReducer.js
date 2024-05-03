import { GET_ALL_BANKS } from "store/Action/bankAction";

export const initialState = {
    getAllBanks: "",
}

const bankReducer = (state = initialState, action) => {
  switch( action.type) {
      case GET_ALL_BANKS:
          return { ...state,getAllBanks: action.payload }
      default:
          return state
  }
}

export default bankReducer
