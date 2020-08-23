import { SET_THEME } from "../actions";

const themes = {
  default: {
    bg: "rgb(255,255,255)",
    color: "rgb(0,0,0)",
    lightBg: "rgba(29,161,242,1)",
    darkBg: "rgb(26,145,218)",
    defaultBg: "rgb(29,161,242)",
    opaqueBg: "rgba(29, 161, 242, 0.1)",
    border: "rgb(230, 236, 240)",
    tweetHov: "rgb(245, 248, 250)",
  },
  dark: {
    bg: "rgb(0,0,0)",
    color: "rgb(255,255,255)",
    lightBg: "rgba(29,161,242,1)",
    darkBg: "rgb(26,145,218)",
    defaultBg: "rgb(29,161,242)",
    opaqueBg: "rgba(29, 161, 242, 0.1)",
    border: "rgb(47, 51, 54)",
    tweetHov: "rgb(21, 24, 28)",
  },
};

const initialState = themes.default;

const theme = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return themes[action.payload];
    default:
      return state;
  }
};

export default theme;
