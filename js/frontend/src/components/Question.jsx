import "./question.css";

export default function question({ Titre, title, imgSource }) {
  return (
    <div className="question-container">
      <p className="title">{title}</p>
      <h1 className="Title">{Titre}</h1>

      <div className="reponses">
        <div>
          <img className="img" src={imgSource} alt="img-background" />

          <h3 className="rep1">Un peu</h3>

          <h2 className="rep2">Pas du tout</h2>
          <h4 className="rep3">Beaucoup</h4>
        </div>
      </div>
    </div>
  );
}
