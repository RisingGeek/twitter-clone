import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import profile from "./profile";
import update from "./update";
import theme from "./theme";
import { LOGOUT_USER } from "../actions";

const appReducer = combineReducers({
  profile,
  update,
  theme,
  form: formReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        ...state,
        profile: {
          user: {},
        },
        theme: {},
      };
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
