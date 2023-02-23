import React, { useState } from "react";
import {
  Avatar,
  Brand,
  BtnContainer,
  Center,
  ImgContainer,
  Input,
  Left,
  LeftContent,
  MenuLinkR,
  MobileMenu,
  Name,
  NameContainer,
  NavBadge,
  Navbar,
  NavBtnLog,
  NavBtnReg,
  NavContainer,
  NavItem,
  Right,
  SearchContainer,
  Small,
  UserContainer,
  UserDropDown,
  UserSide,
} from "./HeaderComponents";

import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/authAction";
import { getAllProducts } from "../../redux/action/productAction";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = "";

  const { authUser, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const isAdmin = user && user.role === "admin";

  const [name, setName] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showMenu, setShowMenu] = useState(null);
  const show = Boolean(showMenu);
  const clickMenu = (event) => {
    setShowMenu(event.currentTarget);
  };
  const closeMenu = () => {
    setShowMenu(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const searchHandler = (e) => {
    e.preventDefault();

    dispatch(getAllProducts(category, name));

    navigate("/products");
  };

  return (
    <>
      <Navbar>
        <NavContainer>
          <Left>
            <LeftContent to="/">
              <Brand>TOSERBA</Brand>
              <Small>Semua Ada, Semua Murah</Small>
            </LeftContent>
          </Left>
          <Center>
            <form onSubmit={searchHandler}>
              <SearchContainer>
                <Input
                  placeholder="Cari Produk..."
                  onChange={(e) => setName(e.target.value)}
                />
                <SearchIcon style={{ color: "gray" }} />
              </SearchContainer>
            </form>
          </Center>
          <MobileMenu
            id="basic-button"
            aria-controls={show ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={show ? "true" : undefined}
            onClick={clickMenu}
          >
            <NavBadge to="/cart">
              <Badge badgeContent={items.length} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </NavBadge>

            <FaBars />
          </MobileMenu>
          <Menu
            id="basic-menu"
            anchorEl={showMenu}
            open={show}
            onClose={closeMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {!authUser
              ? [
                  <MenuLinkR to="/register">
                    <MenuItem>Daftar</MenuItem>
                  </MenuLinkR>,
                  <MenuLinkR to="/login">
                    <MenuItem>Masuk</MenuItem>
                  </MenuLinkR>,
                ]
              : [
                  <MenuLinkR to="/profile">
                    <MenuItem>Profile</MenuItem>
                  </MenuLinkR>,

                  isAdmin ? (
                    <MenuLinkR to="/admin/dashboard">
                      <MenuItem>Dashboard</MenuItem>
                    </MenuLinkR>
                  ) : null,

                  <MenuLinkR to="/transaction">
                    <MenuItem>Transaksi</MenuItem>
                  </MenuLinkR>,

                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>,
                ]}
          </Menu>
          <Right>
            <NavBadge to="/cart">
              <Badge badgeContent={items.length} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </NavBadge>
            {authUser ? (
              <UserSide>
                <UserDropDown
                  id="basic-button2"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <UserContainer>
                    <ImgContainer>
                      <Avatar src={user.avatar} alt="Avatar" />
                    </ImgContainer>
                    <NameContainer>
                      <Name>{user.name}</Name>
                    </NameContainer>
                  </UserContainer>
                </UserDropDown>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button2",
                  }}
                >
                  <MenuLinkR to="/profile">
                    <MenuItem>Profile</MenuItem>
                  </MenuLinkR>

                  {isAdmin ? (
                    <MenuLinkR to="/admin/dashboard">
                      <MenuItem>Dashboard</MenuItem>
                    </MenuLinkR>
                  ) : null}

                  <MenuLinkR to="/transaction">
                    <MenuItem>Transaksi</MenuItem>
                  </MenuLinkR>

                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </Menu>
              </UserSide>
            ) : (
              <BtnContainer>
                <NavItem>
                  <NavBtnReg to="/register">DAFTAR</NavBtnReg>
                </NavItem>
                <NavItem>
                  <NavBtnLog to="/login">MASUK</NavBtnLog>
                </NavItem>
              </BtnContainer>
            )}
          </Right>
        </NavContainer>
      </Navbar>
    </>
  );
};

export default Header;
