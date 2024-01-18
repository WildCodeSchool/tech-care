import { useNavigate, useOutletContext } from "react-router-dom";
import "./question.css";

export default function question({ Titre, title, imgSource, nextPage }) {
  const navigate = useNavigate();
  const { setPrefs } = useOutletContext();

  const handleClick = (value) => {
    setPrefs((prevPrefs) => [...prevPrefs, value]);
    navigate(nextPage);
  };
  return (
    <div className="question-container">
      <img
        src="./src/assets/Fragrance2.png"
        alt="logo"
        className="logo-second"
      />
      <p className="title">{title}</p>
      <h1 className="Title">{Titre}</h1>

      <div className="reponses">
        <div>
          <img className="img" src={imgSource} alt="img-background" />

          <button
            type="button"
            className="rep1"
            onClick={() => handleClick(0)}
            aria-label="Pas du tout"
          >
            Pas du tout
          </button>

          <button
            type="button"
            className="rep2"
            onClick={() => handleClick(1)}
            aria-label="Un peu"
          >
            Un peu
          </button>

          <button
            type="button"
            className="rep3"
            onClick={() => handleClick(2)}
            aria-label="Beaucoup"
          >
            Beaucoup
          </button>
        </div>
      </div>
    </div>
  );
}
