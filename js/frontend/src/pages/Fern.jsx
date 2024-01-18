import Question from "../components/Question";
import Group from "../assets/Group.png";
import Footer from "../components/Footer";

function Aromatic() {
  return (
    <>
      <div>
        <Question questionTitle="J'AIME LES NOTES FOUGERES" imgSource={Group} />
      </div>
      <Footer />
    </>
  );
}

export default Aromatic;
