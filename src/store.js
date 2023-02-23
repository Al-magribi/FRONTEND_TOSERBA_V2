import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./redux/reducer/authReducer";
import { cartReducer } from "./redux/reducer/cartReducer";
import {
  getOrdersReducer,
  myOrdersReducer,
  orderDetailReducer,
  orderReducer,
  orderUpDelReducer,
  updatePaymentReducer,
} from "./redux/reducer/orderReducer";
import {
  addProductReducer,
  getAllProductReducer,
  productDetail,
  UpDelProductReducer,
} from "./redux/reducer/productReducer";
import {
  getUsersReducer,
  userDeleteReducer,
  userDetailReducer,
  userUpdateReducer,
} from "./redux/reducer/userReducer";

const reducer = {
  addProduct: addProductReducer,
  allOrders: getOrdersReducer,
  auth: authReducer,
  cart: cartReducer,
  myOrder: myOrdersReducer,
  newOrder: orderReducer,
  newProduct: addProductReducer,
  orderDetail: orderDetailReducer,
  orderUpDel: orderUpDelReducer,
  payment: updatePaymentReducer,
  products: getAllProductReducer,
  productDetail: productDetail,
  upDelProduct: UpDelProductReducer,
  user: userUpdateReducer,
  userDetail: userDetailReducer,
  userDeleted: userDeleteReducer,
  users: getUsersReducer,
};

const initialState = {
  cart: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
  },
};

const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
