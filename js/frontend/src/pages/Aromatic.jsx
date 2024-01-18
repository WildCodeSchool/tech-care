import Question from "../components/Question";
import Lavande from "../assets/Lavande.png";
import Footer from "../components/Footer";

function Aromatic() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="CHAMPS DE LAVANDE"
          imgSource={Lavande}
          nextPage="/citrus"
        />
      </div>
      <Footer />
    </>
  );
}

export default Aromatic;
