import * as Types from "./restaurants.actionTypes";

export const setRestaurants = (payload) => {
  return { type: Types.SET_RESTAURANTS, payload };
};
