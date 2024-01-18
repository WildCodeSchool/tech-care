import "./homePage.css";
import { Link } from "react-router-dom";
import fragrance from "../assets/Fragrance.svg";
import rubis from "../assets/rubis.png";
import mer from "../assets/mer.png";
import montagne from "../assets/Group.png";
import cactus from "../assets/Cactus.png";
import fleur from "../assets/fleur.png";

function HomePage() {
  return (
    <>
      <img className="rubis" src={rubis} alt="" />
      <img className="mer" src={mer} alt="" />
      <img className="montagne" src={montagne} alt="" />
      <img className="cactus" src={cactus} alt="" />
      <img className="fleur" src={fleur} alt="" />
      <div className="logo">
        <img src={fragrance} alt="Logo fragrance" />
      </div>
      <div className="title">
        <h1>VOTRE PARFUM DE RÊVE EST CHEZ L'ORÉAL</h1>
      </div>
      <div className="subtitle">
        <h2>Recevez jusqu à 5 échantillons de parfum chez vous pour 20€</h2>
      </div>
      <Link to="/gender">
        <div className="btn">
          <button type="button">TROUVER MON PARFUM →</button>
        </div>
      </Link>
      <div className="text-content">
        <p>
          Découvrez votre parfum idéal avec Fragrance by L'Oréal . Répondez à
          quelques questions rapides, explorez des suggestions personnalisées de
          parfums haut de gamme et plongez dans une expérience unique.
          Laissez-vous guider vers une signature olfactive qui reflète votre
          style et votre personnalité.
        </p>
      </div>
    </>
  );
}

export default HomePage;
