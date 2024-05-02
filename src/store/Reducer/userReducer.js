import { GET_ALL_USERS } from "store/Action/userAction";

export const initialState = {
    getAllUsers: "",
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
                return { ...state, getAllUsers: action.payload };
        default:
            return state;
    }
}
export default usersReducer

