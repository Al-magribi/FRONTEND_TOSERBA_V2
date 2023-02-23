import {
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_RESET,
  ADD_PRODUCTS_FAIL,
  CLEAR_ERROR,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  UPDATE_PRODUCT_RESET,
  DELETE_ALL_PRODUCTS_REQUEST,
  DELETE_ALL_PRODUCTS_SUCCESS,
  DELETE_ALL_PRODUCTS_FAIL,
  DELETE_ALL_PRODUCTS_RESET,
} from "../constant/productConstant";

// Get All Products
export const getAllProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case GET_ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Product's details
export const productDetail = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Add Products
export const addProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_PRODUCTS_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        product: action.payload.product,
      };

    case ADD_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_PRODUCTS_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Update && Delete Product
export const UpDelProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PRODUCT_SUCCESS:
    case DELETE_ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
    case DELETE_ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case DELETE_PRODUCT_RESET:
    case DELETE_ALL_PRODUCTS_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case UPDATE_PRODUCT_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
