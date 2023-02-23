import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/pages/user/Users";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Admin/pages/product/Products";
import ProductDetail from "./pages/Prduct Detail/ProductDetail";
import ProductsList from "./pages/Product/ProductsList";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Shipment from "./pages/Shipment/Shipment";
import Status from "./pages/Status/Status";
import Transaction from "./pages/Transaction/Transaction";
import Orders from "./pages/Admin/pages/order/Orders";
import { loadUser } from "./redux/action/authAction";
import store from "./store";
import EditProduct from "./pages/Admin/pages/product/EditProduct";
import AddUser from "./pages/Admin/pages/user/AddUser";
import UpdateUser from "./pages/Admin/pages/user/UpdateUser";
import Protected from "./pages/ProtectedRoute";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home />} />

          <Route
            path="/admin/dashboard"
            element={
              <Protected isAdmin={true}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/admin/users"
            element={
              <Protected isAdmin={true}>
                <Users />
              </Protected>
            }
          />
          <Route
            path="/admin/user/edit/:id"
            element={
              <Protected isAdmin={true}>
                <UpdateUser />
              </Protected>
            }
          />
          <Route
            path="/admin/user/add"
            element={
              <Protected isAdmin={true}>
                <AddUser />
              </Protected>
            }
          />
          <Route
            path="/admin/products"
            element={
              <Protected isAdmin={true}>
                <Products />
              </Protected>
            }
          />

          <Route
            path="/admin/products/edit/:id"
            element={
              <Protected isAdmin={true}>
                <EditProduct />
              </Protected>
            }
          />

          <Route path="/admin/orders" element={<Orders />} />

          <Route path="/products/:category" element={<ProductsList />} />
          <Route path="/products/" element={<ProductsList />} />

          <Route path="/detail/:id" element={<ProductDetail />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          />
          <Route
            path="/cart/shipment"
            element={
              <Protected>
                <Shipment />
              </Protected>
            }
          />
          <Route
            path="/payment/status"
            element={
              <Protected>
                <Status />
              </Protected>
            }
          />
          <Route
            path="/transaction"
            element={
              <Protected>
                <Transaction />
              </Protected>
            }
          />

          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
