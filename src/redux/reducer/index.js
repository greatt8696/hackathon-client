import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import transferAssetReducer from "./transferAssetReducer";

const rootReducer = combineReducers({
  loginReducer,
  transferAssetReducer,
});

export default rootReducer;
