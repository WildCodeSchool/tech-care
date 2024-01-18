import "./gender.css";
import { Link } from "react-router-dom";
import femme from "../assets/Femme.png";
import homme from "../assets/Homme.png";

function Gender() {
  return (
    <div className="container-gender">
      <h1 className="question-gender">QUEL EST VOTRE GENRE ?</h1>
      <div className="flex-gender">
        <Link to="/aromatic">
          <img className="img-woman" src={femme} alt="" />
        </Link>
        <Link to="/aromatic">
          <img className="img-man" src={homme} alt="" />
        </Link>
        <Link to="/aromatic">
          <p className="text-neutre">NEUTRE</p>
        </Link>
      </div>
    </div>
  );
}

export default Gender;
