import { SET_THEME } from "../actions";

const themes = {
  default: {
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
  dark: {
    mode: "dark",
    bg: "rgb(0,0,0)",
    color: "rgb(255,255,255)",
    lightBg: "rgba(29,161,242,1)",
    darkBg: "rgb(26,145,218)",
    defaultBg: "rgb(29,161,242)",
    opaqueBg: "rgba(29, 161, 242, 0.1)",
    border: "rgb(47, 51, 54)",
    tweetHov: "rgb(21, 24, 28)",
    para: "rgb(110, 118, 125)",
    modalBg: "rgba(110, 118, 125, 0.4)",
    boxShadow:
      "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
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
