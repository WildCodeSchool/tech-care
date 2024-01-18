import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Reco from "../components/Reco";

function Recommendation() {
  const [getReco, setGetReco] = useState([]);
  useEffect(() => {
    const getRecoUser = async () => {
      try {
        const response = await axios.get("http://localhost:3310/api/recos");
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
      <Reco
        TitreParfum={getReco.nom}
        MarqueParfum="Marque parfum"
        price={getReco.prix}
      />
      <Reco
        TitreParfum={getReco.nom}
        MarqueParfum="Marque parfum"
        price={getReco.prix}
      />
      <Reco
        TitreParfum={getReco.nom}
        MarqueParfum="Marque parfum"
        price={getReco.prix}
      />
      <Reco
        TitreParfum={getReco.nom}
        MarqueParfum="Marque parfum"
        price={getReco.prix}
      />
      <Reco
        TitreParfum={getReco.nom}
        MarqueParfum="Marque parfum"
        price={getReco.prix}
      />
    </div>
  );
}

export default Recommendation;
