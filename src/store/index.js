import { combineReducers } from "redux";
import managerReducer from "./Reducer/managerReducer";
import pumpReducer from "./Reducer/pumpReducer";
import adminReducer from "./Reducer/adminReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  manager: managerReducer,
  pump: pumpReducer
})

export default rootReducer;         