// import { useState } from "react";
// import "../styles/Flashcard.css";

// const Flashcard = ({ celebrity }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
//       {!flipped ? (
//         <img src={celebrity.image} alt={celebrity.name} className="flashcard-image" />
//       ) : (
//         <div className="flashcard-name">{celebrity.name}</div>
//       )}
//     </div>
//   );
// };

// export default Flashcard;


import { useState } from "react";
import "../styles/Flashcard.css";

const Flashcard = ({ celebrity }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      {!flipped ? (
        <img src={celebrity.image} alt={celebrity.name} className="flashcard-image" />
      ) : (
        <div className="flashcard-name">{celebrity.name}</div>
      )}
    </div>
  );
};

export default Flashcard;
