import Question from "../components/Question";
import Epice from "../assets/Epice.png";
import Footer from "../components/Footer";

function Oriental() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur de :"
          Titre="L'ENCENS"
          imgSource={Epice}
          nextPage="/aromatic"
        />
      </div>
      <Footer />
    </>
  );
}

export default Oriental;
