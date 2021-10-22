export const someAction = (value) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "NAME",
      payload: value,
    });
  };
};
