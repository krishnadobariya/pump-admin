import { GET_ATTENDANCE } from "../Action/attendanceAction";


export  const initialState  = {
    getAttendance : "",
}


const attendanceReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ATTENDANCE:
            return {...state, getAttendance : action.payload}
        default:
            return  state;
    }
}
export default attendanceReducer;