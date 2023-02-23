import React, { useEffect, useState } from "react";
import Header from "../../compnent/Header/Header";
import { ProdListImg, ProdListItem } from "./prodComponent";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  clearError,
  deleteAllProduct,
  deleteProduct,
  getAllProducts,
  getProductDetail,
} from "../../../../redux/action/productAction";
import { Link, useLocation } from "react-router-dom";
import MetaData from "../../../MetaData";
import { DELETE_PRODUCT_RESET } from "../../../../redux/constant/productConstant";
import { Box } from "@mui/system";
import { IconButton, Modal, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import AddProduct from "./addProduct";

// HTML
const createMarkup = (theExactHtmlWithTag) => {
  return { __html: theExactHtmlWithTag };
};

const Products = () => {
  const [show, setShow] = useState(false);
  const [addSow, setAddShow] = useState(false);
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.productDetail);
  const { products, error } = useSelector((state) => state.products);
  const { error: errDelete, isDeleted } = useSelector(
    (state) => state.upDelProduct
  );

  const location = useLocation();
  const pageName = location.pathname.split("/")[2].toUpperCase();

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const deleteAll = () => {
    dispatch(deleteAllProduct());
  };

  const detailHandler = (id) => {
    dispatch(getProductDetail(id));

    setShow(true);
  };

  const columns = [
    {
      field: "product",
      headerName: "Produk",
      width: 500,
      headerAlign: "center",

      renderCell: (params) => {
        return (
          <ProdListItem>
            <ProdListImg src={params.row.img} alt={params.row.name} />
            {params.row.name}
          </ProdListItem>
        );
      },
    },
    {
      field: "category",
      headerName: "Ketogori",
      width: 160,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{params.row.category}</p>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Harga",
      width: 160,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{`Rp ${parseFloat(params.row.price).toLocaleString()}`}</p>
          </>
        );
      },
    },
    {
      field: "capital",
      headerName: "Modal",
      width: 160,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{`Rp ${parseFloat(params.row.capital).toLocaleString()}`}</p>
          </>
        );
      },
    },
    {
      field: "profit",
      headerName: "Profit",
      width: 160,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <p>{`Rp ${parseFloat(params.row.profit).toLocaleString()}`}</p>
          </>
        );
      },
    },

    {
      field: "stock",
      headerName: "Stock",
      width: 75,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Opsi",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <IconButton
              component={Link}
              to={`/admin/products/edit/${params.row._id}`}
            >
              <BorderColorIcon style={{ color: "#FD841F" }} />
            </IconButton>

            <IconButton onClick={() => detailHandler(params.row._id)}>
              <PreviewIcon style={{ color: "#31C6D4" }} />
            </IconButton>

            <IconButton onClick={() => deleteHandler(params.row._id)}>
              <DeleteForeverIcon style={{ color: "#FF1E1E" }} />
            </IconButton>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (error) {
      toast.error("Produk tidak ditemukan");
    }

    if (errDelete) {
      toast.error(errDelete);
      dispatch(clearError());
    }

    if (isDeleted) {
      toast.success("berhasil dihapus");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    const interval = setInterval(() => {
      dispatch(getAllProducts());
    }, 15000);

    return () => clearInterval(interval);
  }, [dispatch, errDelete, isDeleted, toast]);

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
          height: "90%",
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
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              m: 1,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography variant="h6">Daftar Produk</Typography>
          </Box>
          <Box
            sx={{
              m: 1,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <IconButton sx={{ m: 1 }} onClick={() => setAddShow(true)}>
              <AddBoxIcon style={{ color: "#4260e2" }} />
            </IconButton>

            <IconButton sx={{ m: 1 }} onClick={deleteAll}>
              <FolderDeleteIcon style={{ color: "#FF2E2E" }} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ height: "90%", width: "98%" }}>
          <DataGrid
            rows={products}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
          />
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
            <Typography variant="h6">Produk Detail</Typography>

            <IconButton onClick={() => setShow(false)}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              mb: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                mb: { xs: 2, sm: 0 },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{ height: "250px", width: "250px", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography variant="h6">{product.name}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ width: "100px" }}>Kategori</Typography>
                <Typography>{product.category}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ width: "100px" }}>Harga</Typography>
                <Typography>{`Rp ${parseFloat(
                  product.price
                ).toLocaleString()}`}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ width: "100px" }}>Modal</Typography>
                <Typography>{`Rp ${parseFloat(
                  product.capital
                ).toLocaleString()}`}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ width: "100px" }}>Profit</Typography>
                <Typography>{`Rp ${parseFloat(
                  product.profit
                ).toLocaleString()}`}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ width: "100px" }}>Stok</Typography>
                <Typography>{product.stock}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ width: "100px" }}>Berat</Typography>
                <Typography>{product.weight}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6">Deskripsi Produk</Typography>
            <div dangerouslySetInnerHTML={createMarkup(product.desc)} />
          </Box>
        </Box>
      </Modal>
      <Modal open={addSow} onClose={() => setAddShow(false)}>
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
              mb: 1,
            }}
          >
            <Typography variant="h6">Produk Detail</Typography>

            <IconButton onClick={() => setAddShow(false)}>
              <ClearIcon />
            </IconButton>
          </Box>
          <AddProduct setAddShow={setAddShow} />
        </Box>
      </Modal>
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default Products;
