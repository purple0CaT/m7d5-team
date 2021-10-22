import { initialState } from "../store/store.js";

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
      };

    default:
      return state;
  }
};
