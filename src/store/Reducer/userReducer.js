import { UPDATE_USER } from "store/Action/userAction";
import { DELETE_USER } from "store/Action/userAction";
import { GET_ALL_EMPLOYEE } from "store/Action/userAction";
import { GET_ALL_USERS } from "store/Action/userAction";


export const initialState = {
    getAllUsers: "",
    getAllemployee: "",
    updateUser: "",
    deleteUser: "",
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, getAllUsers: action.payload };
        case GET_ALL_EMPLOYEE:
            return { ...state, getAllemployee: action.payload };
        case UPDATE_USER:
            return { ...state, updateUser: action.payload };
        case DELETE_USER:
            return { ...state, deleteUser: action.payload };
        default:
            return state;
    }
}
export default usersReducer

