import Flashcard from "./Flashcard";
import "../styles/CardSet.css";

const CardSet = ({ title, description, celebrities }) => {
  return (
    <div className="card-set">
      <h1 className="card-set-title">{title}</h1>
      <p className="card-set-description">{description}</p>
      <p className="card-count">Total Cards: {celebrities.length}</p> {/* ✅ Displays total */}
      <div className="cards-container">
        {celebrities.map((celeb, index) => (
          <Flashcard key={index} celebrity={celeb} />
        ))}
      </div>
    </div>
  );
};

export default CardSet;
