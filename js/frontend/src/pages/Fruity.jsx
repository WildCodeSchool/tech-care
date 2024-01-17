import Question from "../components/Question";
import Fruit from "../assets/Fruit.png";

function Fruity() {
  return (
    <div>
      <Question questionTitle="J'AIME LES NOTES FRUITÉES" imgSource={Fruit} />
    </div>
  );
}

export default Fruity;
