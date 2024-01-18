import Question from "../components/Question";
import Epice from "../assets/Epice.png";
import Footer from "../components/Footer";

function Oriental() {
  return (
    <>
      <div>
        <Question questionTitle="J'AIME LES NOTES ÉPICÉES" imgSource={Epice} />
      </div>
      <Footer />
    </>
  );
}

export default Oriental;
