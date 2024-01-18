import "./result.css";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

function Result() {
  const data = [
    {
      data: {
        Aromatic: 0.7,
        Citrus: 0.8,
        Fern: 0.9,
        Flowery: 0.67,
        Fruity: 0.8,
        Oriental: 0.5,
        Wooded: 0.4,
      },
      meta: { color: "blue" },
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
      <div className="result-title">Résultat du Questionnaire</div>
      <RadarChart captions={captions} data={data} size={450} />;
    </>
  );
}

export default Result;
