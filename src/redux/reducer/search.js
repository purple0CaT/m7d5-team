import { initialState } from "../store/store.js";

export const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
      };

    default:
      return state;
  }
};
