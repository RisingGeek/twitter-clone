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
        theme: {
          mode: "default",
          bg: "rgb(255,255,255)",
          color: "rgb(0,0,0)",
          lightBg: "rgba(29,161,242,1)",
          darkBg: "rgb(26,145,218)",
          defaultBg: "rgb(29,161,242)",
          opaqueBg: "rgba(29, 161, 242, 0.1)",
          border: "rgb(230, 236, 240)",
          tweetHov: "rgb(245, 248, 250)",
          para: "rgb(101, 119, 134)",
          modalBg: "rgba(0, 0, 0, 0.4)",
          boxShadow:
            "rgba(101,119,134,0.2) 0px 0px 15px, rgba(101,119,134,0.15) 0px 0px 3px 1px",
        },
      };
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
