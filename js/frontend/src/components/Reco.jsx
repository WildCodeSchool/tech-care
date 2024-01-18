import React from "react";
import PropTypes from "prop-types";
import Group from "../assets/Group.png";
import "./reco.css";

export default function Reco({ TitreParfum, MarqueParfum, price }) {
  return (
    <div className="reco-container">
      <div className="eheh">
        <img className="coucou" src={Group} alt="parfum" />
      </div>
      <div className="hihi">
        <h1 className="hi">{TitreParfum}</h1>
        <h3 className="ho">{MarqueParfum}</h3>
        <p className="ha">{price}</p>
        <button type="button">Voir le produit</button>
      </div>
    </div>
  );
}

Reco.propTypes = {
  TitreParfum: PropTypes.string.isRequired,
  MarqueParfum: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
