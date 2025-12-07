import { useState } from "react";

export default function Flashcard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>{front}</h1>
        </div>
        <div className="flip-card-back">
          <h1>{back}</h1>
        </div>
      </div>
    </div>
  );
}
