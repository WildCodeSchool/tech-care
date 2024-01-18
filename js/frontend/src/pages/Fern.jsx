import Question from "../components/Question";
import Rose from "../assets/Rose.png";
import Footer from "../components/Footer";

function Fern() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'une :"
          Titre="BALADE EN FORÊT"
          imgSource={Rose}
          Pasdutout="Pas du tout"
          Unpeu="Un peu"
          Beaucoup="Beaucoup"
        />
      </div>
      <Footer />
    </>
  );
}

export default Fern;
