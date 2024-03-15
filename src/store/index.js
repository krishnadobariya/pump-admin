import { combineReducers } from "redux";
import managerReducer from "./Reducer/managerReducer";
import pumpReducer from "./Reducer/pumpReducer";
import adminReducer from "./Reducer/adminReducer";
import categoryReducer from "./Reducer/categoryReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  manager: managerReducer,
  pump: pumpReducer,
  category: categoryReducer
})

export default rootReducer;         