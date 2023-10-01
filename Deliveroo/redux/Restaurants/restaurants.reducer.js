import * as Types from "./restaurants.actionTypes";

const initialState = {
  restaurant: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restaurant: payload };
    default:
      return state;
  }
};
