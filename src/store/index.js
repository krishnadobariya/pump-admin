import { combineReducers } from "redux";
import managerReducer from "./Reducer/managerReducer";
import pumpReducer from "./Reducer/pumpReducer";

const rootReducer = combineReducers({
  manager: managerReducer,
  pump: pumpReducer
})

export default rootReducer;         