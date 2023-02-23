import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, TextField } from "@mui/material";
import {
  clearError,
  getProductDetail,
  updateProducts,
} from "../../../../redux/action/productAction";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";
import { v4 } from "uuid";
import Loading from "../../compnent/loading/Loading";
import Header from "../../compnent/Header/Header";

import { mobile } from "../../../../component/responsive";
import { UPDATE_PRODUCT_RESET } from "../../../../redux/constant/productConstant";

const FormContainer = styled.form`
  display: flex;
  height: 100%;
  width: 90%;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 2px solid #7f8fa6;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  transition: 0.6s;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 90%;
`;

const Img = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 5px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #379237;
  font-size: 1rem;
`;

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [capital, setCapital] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState(null);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { error, product, loading: loadProduct } = useSelector(
    (state) => state.productDetail
  );
  const { error: updateError, loading, isUpdated } = useSelector(
    (state) => state.upDelProduct
  );
  const productId = params.id;

  const updateProduct = (e) => {
    e.preventDefault();

    if (image === null) {
      const productData = new FormData();
      productData.set("name", name);
      productData.set("price", price);
      productData.set("capital", capital);
      productData.set("desc", desc);
      productData.set("category", category);
      productData.set("stock", stock);
      productData.set("weight", weight);

      dispatch(updateProducts(productId, productData));
    } else {
      const fileName = image.name + v4();
      const storage = getStorage(app);
      const storageRef = ref(storage, `products/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress ${progress} % done`);

          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");

              break;
            case "running":
              console.log("upload is running");

              break;

            default:
          }
        },
        (error) => {
          toast.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const productData = new FormData();
            productData.set("name", name);
            productData.set("price", price);
            productData.set("capital", capital);
            productData.set("desc", desc);
            productData.set("category", category);
            productData.set("stock", stock);
            productData.set("weight", weight);
            productData.set("img", url);

            dispatch(updateProducts(productId, productData));
          });
        }
      );
    }
  };

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetail(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setCapital(product.capital);
      setDesc(product.desc);
      setCategory(product.category);
      setStock(product.stock);
      setWeight(product.weight);
      setOldImages(product.img);
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (isUpdated) {
      dispatch({ type: UPDATE_PRODUCT_RESET });
      navigate("/admin/products");
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearError());
    }
  }, [dispatch, error, toast, isUpdated, updateError, productId, product]);

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImage(e.target.files[0]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wv",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        {loadProduct ? (
          <Loading />
        ) : (
          <FormContainer onSubmit={updateProduct} encType="multipart/form-data">
            <Left>
              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Nama Produk"
                  variant="standard"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Harga"
                  variant="standard"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Modal"
                  variant="standard"
                  name="capital"
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <ReactQuill
                  theme="snow"
                  name="desc"
                  placeholder="Deskripsi"
                  value={desc}
                  onChange={setDesc}
                  style={{ height: "200px", marginBottom: "40px" }}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Kategori"
                  variant="standard"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Stok"
                  variant="standard"
                  name="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  id="standard-basic"
                  label="Berat"
                  placeholder="1000"
                  variant="standard"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </FormGroup>
            </Left>
            <Right>
              <ImgContainer>
                <Img src={oldImages} alt="preview" />

                {imagesPreview.map((image, index) => (
                  <Img src={image} key={index} alt="preview" />
                ))}

                <Input type="file" id="images" onChange={onChange} />
              </ImgContainer>
              <ButtonContainer>
                <Button disabled={loading ? true : false}>Update produk</Button>
              </ButtonContainer>
            </Right>
          </FormContainer>
        )}
      </Box>
    </Box>
  );
};

export default EditProduct;
