import React from "react";
import PropTypes from "prop-types";
import "./reco.css";

export default function Reco({ TitreParfum, MarqueParfum, price }) {
  return (
    <div className="reco-container">
      <h1>{TitreParfum}</h1>
      <h3>{MarqueParfum}</h3>
      <p>{price}</p>
      <button type="button">Voir le produit</button>
    </div>
  );
}

Reco.propTypes = {
  TitreParfum: PropTypes.string.isRequired,
  MarqueParfum: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
