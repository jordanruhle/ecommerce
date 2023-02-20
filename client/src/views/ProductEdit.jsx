import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import ProductForm from "../components/ProductForm";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    description: "",
    mainCategory: "bikes",
    subCategory: "",
    price: 0.0,
    quantity: 0,
    quantitySold: 0,
    image: "",
    color: "#000000",
    size: "One Size",
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`).then((res) => {
      console.log(res.data.product);
      // let product = res.data.product
      console.log(res.data.product.name);
      
      setProductInfo({
        ...productInfo,
        name: res.data.product.name,
        brand: res.data.product.brand,
        description: res.data.product.description,
        mainCategory: res.data.product.mainCategory,
        subCategory: res.data.product.subCategory,
        price: res.data.product.price.$numberDecimal,
        quantity: res.data.product.quantity,
        quantitySold: res.data.product.quantitySold,
        color: res.data.product.color,
        size: res.data.product.size,
      });
      setLoaded(true);
      
    });
  }, []);

  const updateProduct = (e) => {
    e.preventdefualt();
    const formData = new FormData();
    for (let key in productInfo) {
      formData.append(key, productInfo[key]);
    }
    console.log(formData);
    axios
      .put(`http://localhost:8000/api/product/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen">
      <AdminNavBar />
      {loaded ? (
        <ProductForm
          title="Edit Existing Product"
          subTitle="Update product info"
          submitFunction={updateProduct}
          buttonText="Update Product"
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductEdit;
