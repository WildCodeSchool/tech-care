import Question from "../components/Question";
import Foret from "../assets/Foret.png";
import Footer from "../components/Footer";

function Fern() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'une :"
          Titre="BALADE EN FORÊT"
          imgSource={Foret}
          nextPage="/flowery"
        />
      </div>
      <Footer />
    </>
  );
}

export default Fern;
