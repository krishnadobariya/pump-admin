import { combineReducers } from "redux";
import managerReducer from "./Reducer/managerReducer";
import pumpReducer from "./Reducer/pumpReducer";
import adminReducer from "./Reducer/adminReducer";
import categoryReducer from "./Reducer/categoryReducer";
import nozzlesReducer from "./Reducer/nozzlesReducer";
import stockReducer from "./Reducer/stockReducer";
import assetsReducer from "./Reducer/assetsReducer"
import attendanceReducer from "./Reducer/attendanceReducer";
import usersReducer from "./Reducer/userReducer";
import expensesReducer from "./Reducer/expenseReducer";
import bankReducer from "./Reducer/bankReducer";
import cashFlowReducer from "./Reducer/cashFlowReducer";
import creditsReducer from "./Reducer/creditsReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  manager: managerReducer,
  pump: pumpReducer,
  category: categoryReducer,
  nozzles: nozzlesReducer,
  stock: stockReducer,
  assets: assetsReducer,
  attendance: attendanceReducer,
  users: usersReducer,
  expenses: expensesReducer,
  banks: bankReducer,
  cashFlow: cashFlowReducer,
  credits: creditsReducer,
})

export default rootReducer;         