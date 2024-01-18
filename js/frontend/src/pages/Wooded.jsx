import Question from "../components/Question";
import Foret from "../assets/Foret.png";
import Footer from "../components/Footer";

function Wooded() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="CHALET EN BOIS"
          imgSource={Foret}
        />
      </div>
      <Footer />
    </>
  );
}

export default Wooded;
