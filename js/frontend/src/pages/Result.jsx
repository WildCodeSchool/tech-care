import { Link, useOutletContext } from "react-router-dom";
import "./result.css";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

function Result() {
  const { prefs } = useOutletContext();
  const data = [
    {
      data: {
        Fern: (prefs[0] + 1) / 3,
        Flowery: (prefs[1] + 1) / 3,
        Fruity: (prefs[2] + 1) / 3,
        Oriental: (prefs[3] + 1) / 3,
        Aromatic: (prefs[4] + 1) / 3,
        Citrus: (prefs[5] + 1) / 3,
        Wooded: (prefs[6] + 1) / 3,
      },
      meta: { color: "rgb(85, 61, 179)" },
    },
    // {
    //   data: {
    //     Aromatic: 0.6,
    //     Citrus: 0.85,
    //     Fern: 0.5,
    //     Flowery: 0.6,
    //     Fruity: 0.7,
    //     Oriental: 0.6,
    //     Wooded: 0.3,
    //   },
    //   meta: { color: "red" },
    // },
  ];

  const captions = {
    // columns
    Aromatic: "Aromatic",
    Citrus: "Citrus",
    Fern: "Fern",
    Flowery: "Flowery",
    Fruity: "Fruity",
    Oriental: "Oriental",
    Wooded: "Wooded",
  };
  return (
    <>
      <div className="result-title">
        <h1 className="result-title-h1">RÉSULTAT DU QUESTIONNAIRE</h1>
      </div>
      <div className="radar-chart">
        <RadarChart captions={captions} data={data} size={400} />;
      </div>
      <Link to="/recommendation">
        <div className="btn-recommendation">
          <button className="btn-reco" type="button">
            Afficher les recommandations
          </button>
        </div>
      </Link>
    </>
  );
}

export default Result;
