import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import profile from "./profile";

export default combineReducers({
  profile,
  form: formReducer,
});
