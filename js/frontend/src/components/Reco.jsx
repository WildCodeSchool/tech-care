import React from "react";
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
