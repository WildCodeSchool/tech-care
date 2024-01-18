import Question from "../components/Question";
import Foret from "../assets/Foret.png";
import Footer from "../components/Footer";

function Wooded() {
  return (
    <>
      <div>
        <Question questionTitle="J'AIME LES NOTES BOISÉES" imgSource={Foret} />
      </div>
      <Footer />
    </>
  );
}

export default Wooded;
