import Question from "../components/Question";
import Fruit from "../assets/Fruit.png";

function Aromatic() {
  return (
    <div>
      <Question questionTitle="J'aime les notes florales ?" imgSource={Fruit} />
    </div>
  );
}

export default Aromatic;
