
import { GET_ALL_EMPLOYEE } from "store/Action/userAction";
import { GET_ALL_USERS } from "store/Action/userAction";


export const initialState = {
    getAllUsers: "",
    getAllemployee:"",
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
                return { ...state, getAllUsers: action.payload };
        case GET_ALL_EMPLOYEE:
                return { ...state, getAllemployee: action.payload };
        default:
            return state;
    }
}
export default usersReducer

