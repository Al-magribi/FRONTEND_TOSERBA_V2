import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  clearError,
  getUserDetail,
  updateUserFromAdmin,
} from "../../../../redux/action/userAction";
import { UPDATE_USER_RESET } from "../../../../redux/constant/userConstant";
import MetaData from "../../../MetaData";
import Header from "../../compnent/Header/Header";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const userId = params.id;

  const [name, setName] = useState("");
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const { error, isUpdated } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.userDetail);

  const updateHandler = (e) => {
    e.preventDefault();

    const userData = new FormData();
    userData.set("name", name);
    userData.set("username", username);
    userData.set("phone", phone);
    userData.set("role", role);

    dispatch(updateUserFromAdmin(userId, userData));
  };

  useEffect(() => {
    if (isUpdated) {
      dispatch({ type: UPDATE_USER_RESET });

      toast.success("Berhasil diupdated!");

      dispatch(getUserDetail(userId));
    } else if (user && user._id !== userId) {
      dispatch(getUserDetail(userId));
    } else {
      setName(user.name);
      setUsername(user.username);
      setPhone(user.phone);
      setRole(user.role);
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, userId, user, isUpdated]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wv",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MetaData title={`ADMIN - EDIT`} />
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            flex: 1,
            m: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar"
            style={{
              height: "320px",
              width: " 320px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            height: "100%",
            flex: 1,
            m: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <form
            onSubmit={updateHandler}
            encType="application/json"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ m: 3 }}
              id="standard-basic"
              label="Nama Pengguna"
              name="name"
              variant="standard"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              sx={{ m: 3 }}
              id="standard-basic"
              label="Email"
              type="email"
              name="username"
              variant="standard"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              sx={{ m: 3 }}
              id="standard-basic"
              label="Phone"
              name="phone"
              type="number"
              variant="standard"
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
              sx={{ m: 3 }}
              id="standard-basic"
              label="Role"
              name="role"
              type="name"
              variant="standard"
              value={role || ""}
              onChange={(e) => setRole(e.target.value)}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "#03ac0e" }}
                onClick={updateHandler}
              >
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default UpdateUser;
