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

  const getRandomCelebrity = () => {
    const randomIndex = Math.floor(Math.random() * celebrityData.length);
    setCurrentCelebrity(celebrityData[randomIndex]);
  };

  return (
    <div className="app">
      <h1>Celebrity Flashcards</h1>
      <h2>Guess the celebrity behind the card then click to find out!</h2>
      <p>Total Cards: {celebrityData.length}</p> {/* ✅ Shows total number of cards */}
      <Flashcard celebrity={currentCelebrity} /> {/* ✅ Shows only one card at a time */}
      <button className="next-btn" onClick={getRandomCelebrity}>Next</button>
    </div>
  );
}

export default App;
