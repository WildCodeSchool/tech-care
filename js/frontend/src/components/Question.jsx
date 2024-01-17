import "./question.css";

export default function question({ questionTitle }) {
  return (
    <div className="question-container">
      <h1 className="question">{questionTitle}</h1>
      <img className="img" src="test" alt="testt" />
      <div className="reponses">
        <h3 className="rep1">Pas du tout</h3>
        <h3 className="rep2">Un peu</h3>
        <h3 className="rep3">Beaucoup</h3>
      </div>
    </div>
  );
}
