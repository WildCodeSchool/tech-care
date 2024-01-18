import Question from "../components/Question";
import Chalet from "../assets/Chalet.png";
import Footer from "../components/Footer";

function Wooded() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="CHALET EN BOIS"
          imgSource={Chalet}
          nextPage="/result"
        />
      </div>
      <Footer />
    </>
  );
}

export default Wooded;
