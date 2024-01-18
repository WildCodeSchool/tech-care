import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Mer from "../assets/Mer.png";
import Fleur from "../assets/Fleur.png";
import Group from "../assets/Group.png";
import fragrance from "../assets/Fragrance.svg";

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="logo">
        <img src={fragrance} alt="Logo fragrance" />
      </Link>
      <div className="images-header">
        <img className="sea" src={Mer} alt="" />
        <img className="flower" src={Fleur} alt="" />
        <img className="mountain" src={Group} alt="" />
      </div>
    </div>
  );
}
