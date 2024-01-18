import Question from "../components/Question";
import Rose from "../assets/Rose.png";
import Footer from "../components/Footer";

function Aromatic() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'une :"
          Titre="BALADE EN FORÊT"
          imgSource={Rose}
        />
      </div>
      <Footer />
    </>
  );
}

export default Aromatic;
