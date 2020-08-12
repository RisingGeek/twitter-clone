import { SET_UPDATE } from "../actions";

const initialState = {
  refresh: false,
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPDATE:
      return {
        ...state,
        refresh: !state.refresh,
      };
    default:
      return state;
  }
};

export default update;
