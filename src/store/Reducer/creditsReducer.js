import {GET_ALL_CREDITS} from "store/Action/creditsAction";



export const initialState = {
    getAllCredits: "",
}

const creditsReducer = (state =  initialState, action) => {
   switch(action.type){
    case GET_ALL_CREDITS:
        return {...state,  getAllCredits: action.payload };
        default:
            return state;
   }
}

export default creditsReducer
