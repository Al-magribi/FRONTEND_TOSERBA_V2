import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Block1, Block2, Container, Wrapper } from "./userComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../../redux/action/userAction";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import MetaData from "../../../MetaData";
import { DELETE_USER_RESET } from "../../../../redux/constant/userConstant";
import Header from "../../compnent/Header/Header";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

// Search configuration
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Users = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageName = location.pathname.split("/")[2].toUpperCase();

  const { users, error } = useSelector((state) => state.users);
  const { error: errDel, isDeleted } = useSelector(
    (state) => state.userDeleted
  );

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const sendMessage = (mobileNumber) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=${mobileNumber}&text=Hello%2C+saya+admin+&type=phone_number&app_absent=0`
    );
  };

  useEffect(() => {
    if (error) {
      toast.error("User tidak ditemukan");
    }

    if (errDel) {
      toast.error(errDel);
    }

    if (isDeleted) {
      toast.success("Berhasil dihapus");

      dispatch({ type: DELETE_USER_RESET });
    }

    const interval = setInterval(() => {
      dispatch(getUsers());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, errDel, error, isDeleted]);

  return (
    <Container>
      <MetaData title={`ADMIN - ${pageName}`} />
      <Wrapper>
        <Block1>
          <Header />
        </Block1>
        <Block2>
          <Box
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between" },
            }}
          >
            <Box>
              <Typography>Data Pengguna</Typography>
            </Box>

            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: { xs: "center", sm: "start" },
              flexWrap: "wrap",
            }}
          >
            {users.map((user) => (
              <Card sx={{ width: { xs: 160, sm: 250 }, m: 1 }} key={user._id}>
                <CardMedia
                  sx={{ height: 80 }}
                  image="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="user"
                  component="img"
                />
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: "Hex: #075e54" }}>A</Avatar>}
                  title={user.name}
                  subheader="2023"
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Typography>{user.username}</Typography>
                    <Typography>{user.phone}</Typography>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <IconButton
                    component={Link}
                    to={`/admin/user/edit/${user._id}`}
                  >
                    <BorderColorIcon style={{ color: "#34b7f1" }} />
                  </IconButton>

                  <IconButton onClick={() => deleteHandler(user._id)}>
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>

                  <IconButton onClick={() => sendMessage(user.phone)}>
                    <WhatsAppIcon style={{ color: "#25d366" }} />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Block2>
      </Wrapper>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default Users;
