import { TOGGLE_BTN } from "../actions";

const reducer = (state, action) => {
  if (action.type === TOGGLE_BTN) {
    return { ...state, showInfo: !state.showInfo };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
