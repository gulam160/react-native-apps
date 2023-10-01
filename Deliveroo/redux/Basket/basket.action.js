import * as Types from "./basket.actionTypes";

export const addToBasket = (payload) => {
  return { type: Types.ADD_TO_BASKET, payload };
};

export const removeFromBasket = (payload) => {
  return { type: Types.REMOVE_FROM_BASKET, payload };
};
