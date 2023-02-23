import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_CART,
} from "../constant/cartConstant";

export const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.items.find((i) => i.product === item.product);

      if (isItemExist) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, item],
        };
      }

    case REMOVE_ITEM_CART:
      return {
        ...state,
        items: state.items.filter((i) => i.product !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
