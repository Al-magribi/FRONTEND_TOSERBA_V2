import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../redux/action/authAction";
import Loading from "../component/Loading/Loading";

const Protected = ({ children, isAdmin }) => {
  const { authUser, loading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [authUser, dispatch, loading, user]);

  if (loading) return <Loading />;

  if (!loading && authUser) {
    if (isAdmin === true && user.role !== "admin") {
      return <Navigate to="/" />;
    }
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default Protected;
