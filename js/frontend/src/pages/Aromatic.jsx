import Question from "../components/Question";
import Foret from "../assets/Foret.png";
import Footer from "../components/Footer";

function Aromatic() {
  return (
    <>
      <div>
        <Question questionTitle="J'AIME LES NOTES ?" imgSource={Foret} />
      </div>
      <Footer />
    </>
  );
}

export default Aromatic;
