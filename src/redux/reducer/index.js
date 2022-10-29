import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import transferAssetReducer from "./transferAssetReducer";
import exchangeReducer from "./exchangeReducer";
import coinReducer from "./coinReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  loginReducer,
  transferAssetReducer,
  exchangeReducer,
  userReducer,
  coinReducer,
});

export default rootReducer;
