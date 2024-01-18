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
      <h1 className="question-gender">QUEL EST VOTRE GENRE ?</h1>
      <div className="flex-gender">
        <button
          aria-label="femme"
          type="button"
          onClick={() => handleClick("Femme")}
        >
          <img className="img-woman" src={femme} alt="" />
        </button>
        <button
          aria-label="homme"
          type="button"
          onClick={() => handleClick("Homme")}
        >
          <img className="img-man" src={homme} alt="" />
        </button>
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
