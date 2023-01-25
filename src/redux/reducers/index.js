import { combineReducers } from "redux";
import formReducer from "./formReducer";
const allReducers = combineReducers({
    formReducer,
});
export default allReducers;