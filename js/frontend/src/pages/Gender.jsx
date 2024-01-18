import "./gender.css";
import { Link } from "react-router-dom";
import femme from "../assets/Femme.png";
import homme from "../assets/Homme.png";

function Gender() {
  return (
    <div className="container-gender">
      <h1 className="question-gender">QUEL EST VOTRE GENRE ?</h1>
      <div className="flex-gender">
        <Link to="/fern/female">
          <img className="img-woman" src={femme} alt="" />
        </Link>
        <Link to="/fern/male">
          <img className="img-man" src={homme} alt="" />
        </Link>
        <Link to="/fern/neutre" className="text-neutre">
          NEUTRE
        </Link>
      </div>
    </div>
  );
}

export default Gender;
