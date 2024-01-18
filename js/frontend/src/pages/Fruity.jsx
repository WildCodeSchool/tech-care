import Question from "../components/Question";
import Fruit from "../assets/Fruit.png";
import Footer from "../components/Footer";

function Fruity() {
  return (
    <>
      <div>
        <Question questionTitle="J'AIME LES NOTES FRUITÉES" imgSource={Fruit} />
      </div>
      <Footer />
    </>
  );
}

export default Fruity;
