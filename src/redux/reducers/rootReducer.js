import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import profile from "./profile";
import update from "./update";

export default combineReducers({
  profile,
  update,
  form: formReducer,
});
