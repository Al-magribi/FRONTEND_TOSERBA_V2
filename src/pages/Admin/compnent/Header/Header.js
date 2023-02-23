import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = React.useState(false);

  const appBarStyle = {
    background: "#03ac0e",
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
              cursor: "pointer",
            }}
          >
            <MenuIcon onClick={() => setShow(true)} />
          </Box>

          <AdminPanelSettingsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/admin/dashboard"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ADMINISTRATOR
          </Typography>
          <AdminPanelSettingsIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ADMINISTRATOR
          </Typography>
          <Drawer open={show} onClose={() => setShow(false)}>
            <Box sx={{ width: "250px" }}>
              <List>
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/admin/dashboard"
                    onClick={() => setShow(false)}
                  >
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dasboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={Link} to="/admin/users">
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={Link} to="/admin/products">
                    <ListItemIcon>
                      <ProductionQuantityLimitsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Produk" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={Link} to="/admin/orders">
                    <ListItemIcon>
                      <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pesanan" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
