import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import Reco from "../components/Reco";

function Recommendation() {
  const { genre, prefs } = useOutletContext();
  const body = { genre, prefs };
  const [getReco, setGetReco] = useState([]);
  useEffect(() => {
    const getRecoUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3310/api/recos",
          body
        );
        setGetReco(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getRecoUser();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="selection">Votre sélection de parfum</h1>
      {getReco.map((reco) => (
        <Reco
          nom={reco.nom}
          marque={reco.marque}
          prix={reco.prix}
          image={reco.image}
        />
      ))}
    </div>
  );
}

export default Recommendation;
