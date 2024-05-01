import { combineReducers } from "redux";
import managerReducer from "./Reducer/managerReducer";
import pumpReducer from "./Reducer/pumpReducer";
import adminReducer from "./Reducer/adminReducer";
import categoryReducer from "./Reducer/categoryReducer";
import nozzlesReducer from "./Reducer/nozzlesReducer";
import stockReducer from "./Reducer/stockReducer";
import assetsReducer from "./Reducer/assetsReducer"
import attendanceReducer from "./Reducer/attendanceReducer"


const rootReducer = combineReducers({
  admin: adminReducer,
  manager: managerReducer,
  pump: pumpReducer,
  category: categoryReducer,
  nozzles: nozzlesReducer,
  stock: stockReducer,
  assets: assetsReducer,
  attendance: attendanceReducer
})

export default rootReducer;         