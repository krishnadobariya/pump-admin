import { GET_ALL_EXPENSES } from "store/Action/expenseAction";
import { UPDATE_EXPENSES } from "store/Action/expenseAction";
import { ADD_EXPENSES } from "store/Action/expenseAction";

export const initialState = {
    getAllExpenses: "",
    updateExpenses: "",
    AddExpenses: ""
}

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EXPENSES:
                return { ...state, getAllExpenses: action.payload };
        case UPDATE_EXPENSES:
                return { ...state, updateExpenses: action.payload };
        case ADD_EXPENSES:
                return { ...state, expenseAdd: action.payload };
        default:
            return state;
    }
}
export default expensesReducer
