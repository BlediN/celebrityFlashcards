import { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./styles/App.css";

const celebrityData = [
  { name: "Leonardo DiCaprio", image: "/images/dicaprio.jpg" },
  { name: "Rihanna", image: "/images/rihanna.jpg" },
  { name: "Zendaya", image: "/images/zendaya.jpg" },
  { name: "Keanu Reeves", image: "/images/keanu.jpg" },
  { name: "Beyoncé", image: "/images/beyonce.jpg" },
  { name: "Tom Holland", image: "/images/holland.jpg" },
  { name: "Emma Watson", image: "/images/watson.jpg" },
  { name: "Chris Hemsworth", image: "/images/hemsworth.jpg" },
  { name: "Scarlett Johansson", image: "/images/johansson.jpg" },
  { name: "Donald Trump", image: "/images/trump.jpg" }
];

function App() {
  const [currentCelebrity, setCurrentCelebrity] = useState(celebrityData[0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextCelebrity = () => {
    const newIndex = (currentIndex + 1) % celebrityData.length;
    setCurrentIndex(newIndex);
    setCurrentCelebrity(celebrityData[newIndex]);
  };

  const getPreviousCelebrity = () => {
    const newIndex = (currentIndex - 1 + celebrityData.length) % celebrityData.length;
    setCurrentIndex(newIndex);
    setCurrentCelebrity(celebrityData[newIndex]);
  };

  const [answer, setAnswer] = useState('');
  const [answerResult, setAnswerResult] = useState(null);

  const checkAnswer = () => {
    if (answer.toLowerCase() === currentCelebrity.name.toLowerCase()) {
      setAnswerResult('Correct!');
    } else {
      setAnswerResult('Incorrect. The correct answer is ' + currentCelebrity.name);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...celebrityData].sort(() => Math.random() - 0.5);
    setCurrentIndex(0);
    setCurrentCelebrity(shuffled[0]);
  };

  return (
    <div className="app">
      <h1>Celebrity Flashcards</h1>
      <h2>Guess the celebrity behind the card then click to find out!</h2>
      <p>Total Cards: {celebrityData.length}</p>
      <Flashcard celebrity={currentCelebrity} />
      <div className="button-container">
        <button
          className="next-btn"
          onClick={getPreviousCelebrity}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className="next-btn"
          onClick={getNextCelebrity}
          disabled={currentIndex === celebrityData.length - 1}
        >
          Next
        </button>
        <button className="next-btn" onClick={shuffleCards}>
          Shuffle
        </button>
      </div>
      <div className="answer-input">
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button className="submit-btn" onClick={checkAnswer}>
          Submit
        </button>
      </div>
      {answerResult && <p>{answerResult}</p>}
    </div>

  );
}

export default App;
