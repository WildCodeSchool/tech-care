import React from "react";
import "./header.css";
import Mer from "../assets/Mer.png";
import Fleur from "../assets/Fleur.png";
import Group from "../assets/Group.png";
import fragrance from "../assets/Fragrance.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={fragrance} alt="Logo fragrance" />
      </div>
      <div className="images-header">
        <img className="mer" src={Mer} alt="" />
        <img className="fleur" src={Fleur} alt="" />
        <img className="montagne" src={Group} alt="" />
      </div>
    </div>
  );
}
