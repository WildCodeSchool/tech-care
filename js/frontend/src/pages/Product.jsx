import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "./product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3310/api/parfums/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      <Header />
      {product && (
        <div className="product-container page-specific">
          <img className="coucou" src={product.image} alt="parfum" />
          <h1 className="hi">{product.nom}</h1>
          <h3 className="ho">{product.marque}</h3>
          <p className="ha">{product.genre}</p>
          <p className="ha">{product.prix} €</p>
          <p className="ha">{product.format} €</p>
          <p className="ha">{product.description}</p>
          <p className="ha">Senteurs : {product?.senteurs?.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
