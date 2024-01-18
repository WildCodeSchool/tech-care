import Question from "../components/Question";
import Fruit from "../assets/Fruit.png";
import Footer from "../components/Footer";

function Aromatic() {
  return (
    <>
      <div>
        <Question
          questionTitle="J'aime les notes florales ?"
          imgSource={Fruit}
        />
      </div>
      <Footer />
    </>
  );
}

export default Aromatic;
