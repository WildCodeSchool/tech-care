import React from "react";
import PropTypes from "prop-types";
// import Group from "../assets/Group.png";
import "./reco.css";
import { Link } from "react-router-dom";

export default function Reco({ id, nom, marque, prix, image, pourcent }) {
  return (
    <div className="reco-container">
      <div className="eheh">
        <img className="coucou" src={image} alt="parfum" />
      </div>
      <div className="hihi">
        <h1 className="hi">{nom}</h1>
        <h3 className="ho">{marque}</h3>
        <p className="ha">Correspondance : {pourcent} %</p>
        <p className="ha">{prix} €</p>

        <Link to={`/product/${id}`}>Voir le produit</Link>
      </div>
    </div>
  );
}

Reco.propTypes = {
  id: PropTypes.number.isRequired,
  nom: PropTypes.string.isRequired,
  marque: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  pourcent: PropTypes.number.isRequired,
};
