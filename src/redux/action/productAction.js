import axios from "axios";
import {
  ADD_PRODUCTS_FAIL,
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_SUCCESS,
  CLEAR_ERROR,
  DELETE_ALL_PRODUCTS_FAIL,
  DELETE_ALL_PRODUCTS_REQUEST,
  DELETE_ALL_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../constant/productConstant";

export const getAllProducts = (category, name) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });

    let link = `/api/products`;

    if (category) {
      link = `/api/products?category=${category}`;
    }

    if (name) {
      link = `/api/products?name=${name}`;
    }
    const { data } = await axios.get(link);

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CLEAR_ERROR, payload: error.respone.data.message });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAIL,
      payload: error.respone.data.message,
    });
  }
};

// Admin Features
// Add Products
export const addProducts = (productData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCTS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/admin/product/create",
      productData,
      config
    );

    dispatch({
      type: ADD_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCTS_FAIL,
      error: error.response.data.message,
    });
  }
};

// Update Products
export const updateProducts = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/admin/product/update/${id}`,
      productData,
      config
    );

    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAIL, error: error.response.data.message });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

// Delete Product => Admin
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/admin/product/delete/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ALL_PRODUCTS_REQUEST });

    const { data } = await axios.delete(`/api/admin/product/deleteAll`);

    dispatch({
      type: DELETE_ALL_PRODUCTS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};
