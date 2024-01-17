import Question from "../components/Question";
import Fleur from "../assets/Fleur.png";

function Flowery() {
  return (
    <div>
      <Question questionTitle="J'AIME LES NOTES FLORALES" imgSource={Fleur} />
    </div>
  );
}

export default Flowery;
