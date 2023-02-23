import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getOrderDetails,
  getOrders,
  updateOrder,
} from "../../../../redux/action/orderAction";
import MetaData from "../../../MetaData";
import Header from "../../compnent/Header/Header";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "../../compnent/loading/Loading";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CloseIcon from "@mui/icons-material/Close";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ClearIcon from "@mui/icons-material/Clear";
import UpgradeIcon from "@mui/icons-material/Upgrade";

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

const Orders = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageName = location.pathname.split("/")[2].toUpperCase();

  const { loading, orders } = useSelector((state) => state.allOrders);
  const { loading: loadingOrder, order } = useSelector(
    (state) => state.orderDetail
  );

  const [orderId, setOrderId] = useState("");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const [resi, setResi] = useState("");
  const [process, setProcess] = useState("");

  const sendMessage = (mobileNumber) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=${mobileNumber}&text=Hello%2C+saya+admin+&type=phone_number&app_absent=0`
    );
  };

  const detailHandler = (id) => {
    setOrderId(id);

    setShow(true);
  };

  const processOrder = (id) => {
    setOrderId(id);

    setOpen(true);
  };

  const update = (id) => {
    if (!resi) {
      const orderData = new FormData();
      orderData.set("status", process);
      orderData.set("resi", orders.resi);

      dispatch(updateOrder(id, orderData));

      setOpen(false);
    } else {
      const orderData = new FormData();
      orderData.set("status", process);
      orderData.set("resi", resi);

      dispatch(updateOrder(id, orderData));

      setOpen(false);
    }
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
        const amount = params.row.amount;
        if (amount == null || isNaN(amount)) {
          return <p>-</p>; // or some other default value
        }
        return (
          <>
            <p>{`Rp ${parseFloat(amount).toLocaleString()}`}</p>
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
            <IconButton onClick={() => processOrder(params.row._id)}>
              <BorderColorIcon style={{ color: "#25d366" }} />
            </IconButton>

            <IconButton onClick={() => detailHandler(params.row._id)}>
              <FindInPageIcon style={{ color: "#25d366" }} />
            </IconButton>

            <IconButton onClick={() => sendMessage(params.row.shipment.phone)}>
              <WhatsAppIcon style={{ color: "#25d366" }} />
            </IconButton>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderDetails(orderId));
    }

    const interval = setInterval(() => {
      dispatch(getOrders());
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [dispatch, orderId]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wv",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MetaData title={`ADMIN - ${pageName}`} />
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            mt: 1,
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ ml: 3 }}>
            Daftar Pesanan
          </Typography>
        </Box>
        <Box
          sx={{
            height: "90%",
            width: "98%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <DataGrid
              rows={orders}
              getRowId={(row) => row._id}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
            ></DataGrid>
          )}
        </Box>
      </Box>
      <Modal open={show} onClose={() => setShow(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 350, sm: 800 },
            height: { xs: 450, sm: 400 },
            bgcolor: "#FFFF",
            boxShadow: 24,
            p: 4,
            overflow: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Order Detail</Typography>

            <IconButton onClick={() => setShow(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            {loadingOrder ? null : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: { xs: "center", sm: "center" },
                      justifyContent: { xs: "center", sm: "start" },
                      flexWrap: "wrap",
                    }}
                  >
                    <Card
                      sx={{
                        width: { xs: 300, sm: 250 },
                        height: "230px",
                        m: 1,
                      }}
                    >
                      <CardHeader title="Pengiriman" />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            {order && order.shipment && order.shipment.name}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            {order && order.shipment && order.shipment.address}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            {order && order.shipment && order.shipment.phone}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            <strong>{`Ongkir Rp ${parseFloat(
                              order && order.shipCost
                            ).toLocaleString()}`}</strong>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{
                        width: { xs: 300, sm: 250 },
                        height: "230px",
                        m: 1,
                      }}
                    >
                      <CardHeader title="Pembayaran" />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            {order && order.payment && order.payment.id}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            {order && order.payment && order.payment.status}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            mb: 1,
                          }}
                        >
                          <Typography>
                            <strong>{`Total Tagihan Rp ${parseFloat(
                              order && order.amount
                            ).toLocaleString()}`}</strong>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    {order &&
                      order.orderItems &&
                      order.orderItems.map((item) => (
                        <Card key={item.product} sx={{ width: "100%", mb: 2 }}>
                          <CardHeader
                            title={
                              <Typography variant="h6" style={{ fontSize: 14 }}>
                                {item.name}
                              </Typography>
                            }
                          />
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography>
                                <strong>{item.quantity} Barang</strong> X{" "}
                                {`Rp ${parseFloat(
                                  item.price
                                ).toLocaleString()}`}
                              </Typography>
                              <Typography>
                                <strong>{`Rp ${parseFloat(
                                  item.quantity * item.price
                                ).toLocaleString()}`}</strong>
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 250, sm: 400 },
            height: { xs: 350, sm: 400 },
            bgcolor: "#FFFF",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Proses pesanan</Typography>

            <IconButton onClick={() => setOpen(false)}>
              <ClearIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Input Resi"
                variant="outlined"
                name="resi"
                type="text"
                sx={{ m: 2 }}
                onChange={(e) => setResi(e.target.value)}
              />

              <FormControl sx={{ m: 2, width: 225 }}>
                <InputLabel>Process</InputLabel>
                <Select
                  value={process}
                  label="Process"
                  onChange={(e) => setProcess(e.target.value)}
                >
                  <MenuItem value={"Dikirim"}>Dikirim</MenuItem>
                </Select>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button onClick={() => update(order._id)}>
                  <UpgradeIcon />
                  <Typography>Proses Pesanan</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Orders;
