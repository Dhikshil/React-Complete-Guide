import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  function handleNameChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleButton() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
      <p>
        <input onChange={handleNameChange} value={playerName} type="text" />
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
