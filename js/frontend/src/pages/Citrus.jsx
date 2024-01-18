import Question from "../components/Question";
import Fruit from "../assets/Fruit.png";
import Footer from "../components/Footer";

function Citrus() {
  return (

    <>
     <div>
      <Question questionTitle="J'AIMES LES NOTES D'AGRUMES" imgSource={Fruit} />
    </div>
      <Footer />
    </>

    

  );
}

export default Citrus;
