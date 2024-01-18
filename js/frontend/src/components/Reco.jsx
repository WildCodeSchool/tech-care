import React from "react";
import PropTypes from "prop-types";
// import Group from "../assets/Group.png";
import "./reco.css";

export default function Reco({ nom, marque, prix, image }) {
  return (
    <div className="reco-container">
      <div className="eheh">
        <img className="coucou" src={image} alt="parfum" />
      </div>
      <div className="hihi">
        <h1 className="hi">{nom}</h1>
        <h3 className="ho">{marque}</h3>
        <p className="ha">{prix}</p>
        <button type="button">Voir le produit</button>
      </div>
    </div>
  );
}

Reco.propTypes = {
  nom: PropTypes.string.isRequired,
  marque: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
