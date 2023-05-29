import changeNumber from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
  //   changeBackground etc... other reducer
});
export default rootReducer;
