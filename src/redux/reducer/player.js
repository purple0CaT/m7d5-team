import { initialState } from "../store/store.js";

export const playerReducer = (state = initialState.player, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
      };

    default:
      return state;
  }
};
