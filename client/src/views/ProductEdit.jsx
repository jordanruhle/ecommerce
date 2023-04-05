import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavBar from "../components/AdminComponents/AdminNavBar";
import ProductForm from "../components/ProductComponents/ProductForm";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([])
  const [inputValue, setInputValue] = useState('$0.00')
  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    description: "",
    mainCategory: "bikes",
    subCategory: "",
    price: "0.0",
    quantity: 0,
    quantitySold: 0,
    image: "",
    color: "#000000",
    colorName: "",
    size: "One Size",
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/view/${id}`).then((res) => {
      const { product } = res.data;
      setProductInfo((previousState) => ({
        ...previousState,
        name: product.name,
        brand: product.brand,
        description: product.description,
        mainCategory: product.mainCategory,
        subCategory: product.subCategory,
        price: product.price.$numberDecimal,
        quantity: product.quantity,
        quantitySold: product.quantitySold,
        image: product.image,
        color: product.color,
        colorName: product.colorName,
        size: product.size,
      }));
      setInputValue(product.price.$numberDecimal)
      setLoaded(true);
    }).catch(err => console.error(err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
  
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
        navigate("/dashboard/products");
      })
      .catch((err) => {
        console.log(err)
        const errs = []
        const data = err.response.data.errors
        for (const key in data){
          let errMessage = data[key].message;
          errs.push(errMessage)
        }
        setErrors(errs)
        console.log(errors);
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
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductEdit;
