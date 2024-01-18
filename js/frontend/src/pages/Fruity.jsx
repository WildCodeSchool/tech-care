import Question from "../components/Question";
import Fruit from "../assets/Fruit.png";
import Footer from "../components/Footer";

function Fruity() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="PANIER DE FRUIT"
          imgSource={Fruit}
          nextPage="/oriental"
        />
      </div>
      <Footer />
    </>
  );
}

export default Fruity;
