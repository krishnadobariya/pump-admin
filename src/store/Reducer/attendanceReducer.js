import { ADD_ATTENDANCE, GET_ATTENDANCE } from "../Action/attendanceAction";


export const initialState = {
    getAttendance: "",
    addAttendance: "",
}


const attendanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTENDANCE:
            return { ...state, getAttendance: action.payload }
        case ADD_ATTENDANCE:
            return { ...state, addAttendance: action.payload }
        default:
            return state;
    }
}
export default attendanceReducer;