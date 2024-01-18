import Question from "../components/Question";
import Rose from "../assets/Rose.png";
import Footer from "../components/Footer";

function Flowery() {
  return (
    <>
      <div>
        <Question questionTitle="J'AIME LES NOTES FLORALES" imgSource={Rose} />
      </div>
      <Footer />
    </>
  );
}

export default Flowery;
