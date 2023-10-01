import * as Types from "./basket.actionTypes";

const initialState = {
  items: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.ADD_TO_BASKET:
      return { ...state, items: [...state.items, payload] };
    case Types.REMOVE_FROM_BASKET:
      const index = state.items.findIndex((el) => el.id === payload.id);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id : ${payload.id}) as it is not in the basket!`
        );
      }
      return { ...state, items: newBasket };
    default:
      return state;
  }
};
