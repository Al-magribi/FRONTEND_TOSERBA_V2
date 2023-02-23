import axios from "axios";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_CART,
} from "../constant/cartConstant";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  // cari produk

  const { data } = await axios.get(
    `https://backend-toserba.adaptable.app//api/product/${id}`
  );

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      img: data.product.img,
      stock: data.product.stock,
      weight: data.product.weight,
      quantity,
    },
  });

  localStorage.setItem("items", JSON.stringify(getState().cart.items));
};

export const removeItem = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_ITEM_CART, payload: id });

  localStorage.setItem("items", JSON.stringify(getState().cart.items));
};

export const clearCart = (action) => async (dispatch) => {
  dispatch({
    type: CLEAR_CART,
    payload: action.payload,
  });
  localStorage.removeItem("items");
};
