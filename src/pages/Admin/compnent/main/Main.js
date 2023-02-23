import React from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { Block1, Block3, Container, Table, Wrapper } from "./mainComponent";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../Header/Header";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

// handling date and time
const options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "Asia/Jakarta",
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("id-ID", options).replace(/\./g, ":");
};

const Main = () => {
  const { loading: ordersLoading, orders, totalAmount } = useSelector(
    (state) => state.allOrders
  );
  const { loading: userLoading, users } = useSelector((state) => state.users);
  const { loading: productsLoading, products } = useSelector(
    (state) => state.products
  );

  const sliceOrder = orders && orders.slice(0, 5);

  const sendMessage = (mobileNumber) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=${mobileNumber}&text=Hello%2C+saya+admin+&type=phone_number&app_absent=0`
    );
  };

  const columns = [
    {
      field: "order_id",
      headerName: "Order",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div>
            <p>{params.row.payment.order_id}</p>
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Customer",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div>
            <p>{params.row.shipment.name}</p>
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Tagihan",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{`Rp ${parseFloat(params.row.amount).toLocaleString()}`}</p>
          </>
        );
      },
    },

    {
      field: "paidAt",
      headerName: "Tanggal",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{formatDate(params.row.paidAt)}</p>
          </>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{params.row.payment.status}</p>
          </>
        );
      },
    },
    {
      field: "orderStatus",
      headerName: "Order Status",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{params.row.orderStatus}</p>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Opsi",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <IconButton component={Link} to="/admin/orders">
              <ReadMoreIcon style={{ color: "#25d366" }} />
            </IconButton>
            <IconButton onClick={() => sendMessage(params.row.shipment.phone)}>
              <WhatsAppIcon style={{ color: "#25d366" }} />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Block1>
          <Header />
        </Block1>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            mt: 3,
            mb: 1,
            // flexDirection: { xs: "column", sm: "row" },
            flexWrap: { xs: "wrap" },
          }}
        >
          <Card
            sx={{
              width: { xs: 190, sm: 200, lg: 250 },
              mb: { xs: 1 },
              height: { xs: 130 },
            }}
          >
            <CardHeader
              avatar={<GroupIcon />}
              title="User"
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">
                {userLoading ? "..." : users.length}
              </Typography>
              <IconButton component={Link} to="/admin/users">
                <KeyboardDoubleArrowRightIcon sx={{ color: "red" }} />
              </IconButton>
            </CardContent>
          </Card>
          <Card
            sx={{ width: { xs: 190, sm: 200, lg: 250 }, height: { xs: 130 } }}
          >
            <CardHeader
              avatar={<GroupIcon />}
              title="Produk"
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">
                {productsLoading ? "..." : products.length}
              </Typography>
              <IconButton component={Link} to="/admin/products">
                <KeyboardDoubleArrowRightIcon sx={{ color: "red" }} />
              </IconButton>
            </CardContent>
          </Card>

          <Card
            sx={{ width: { xs: 190, sm: 200, lg: 250 }, height: { xs: 130 } }}
          >
            <CardHeader
              avatar={<GroupIcon />}
              title="Pesanan"
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">
                {ordersLoading ? "..." : orders.length}
              </Typography>
              <IconButton component={Link} to="/admin/orders">
                <KeyboardDoubleArrowRightIcon sx={{ color: "red" }} />
              </IconButton>
            </CardContent>
          </Card>
          <Card
            sx={{ width: { xs: 190, sm: 200, lg: 250 }, height: { xs: 130 } }}
          >
            <CardHeader
              avatar={<GroupIcon />}
              title="Pendapatan"
              titleTypographyProps={{ variant: "h5" }}
            />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">
                {ordersLoading
                  ? "..."
                  : `Rp ${parseFloat(totalAmount).toLocaleString()}`}
              </Typography>
              <IconButton component={Link} to="/admin/users">
                <KeyboardDoubleArrowRightIcon sx={{ color: "red" }} />
              </IconButton>
            </CardContent>
          </Card>
        </Box>

        <Block3>
          <Typography>Pesanan Terbaru</Typography>
          <Table>
            {ordersLoading ? (
              <Loading />
            ) : (
              <DataGrid
                rows={sliceOrder}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            )}
          </Table>
        </Block3>
      </Wrapper>
    </Container>
  );
};

export default Main;
