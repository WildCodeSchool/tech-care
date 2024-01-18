/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./gender.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import femme from "../assets/Femme.png";
import homme from "../assets/Homme.png";
import Footer from "../components/Footer";

function Gender() {
  const navigate = useNavigate();
  const { setGenre } = useOutletContext();

  const handleClick = (sexe) => {
    setGenre(sexe);
    navigate("/fern");
  };

  return (
    <div className="container-gender">
      <img
        src="./src/assets/Fragrance2.png"
        alt="logo"
        className="logo-second"
      />
      <h1 className="question-gender">QUEL EST VOTRE GENRE ?</h1>
      <div className="flex-gender">
        <img
          onClick={() => handleClick("Femme")}
          className="img-woman"
          src={femme}
          alt=""
        />
        <img
          onClick={() => handleClick("Homme")}
          className="img-man"
          src={homme}
          alt=""
        />
        <button
          aria-label="neutre"
          className="text-neutre"
          type="button"
          onClick={() => handleClick("Neutre")}
        >
          NEUTRE
        </button>
      </div>
      <div className="footer-gender">
        <Footer />
      </div>
    </div>
  );
}

export default Gender;
