import Question from "../components/Question";
import Rose from "../assets/Rose.png";
import Footer from "../components/Footer";

function Flowery() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="BOUQUET DE ROSES"
          imgSource={Rose}
          nextPage="/fruity"
        />
      </div>
      <Footer />
    </>
  );
}

export default Flowery;
