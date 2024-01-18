import Question from "../components/Question";
import JusOrange from "../assets/JusOrange.png";
import Footer from "../components/Footer";

function Citrus() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur du :"
          Titre="JUS D'ORANGE DU MATIN"
          imgSource={JusOrange}
        />
      </div>
      <Footer />
    </>
  );
}

export default Citrus;
