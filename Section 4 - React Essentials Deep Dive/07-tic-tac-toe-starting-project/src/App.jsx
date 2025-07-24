import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";


function App() {
  const [ gameTurns, SetGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    SetGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"
      }

      const updatedTurns = [{ square: {rowIndex, col: colIndex }, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    })
  }

  return (<main>
    <div id="game-container" className="highlight-player">
      <ol id="players">
        <Player initialName = "Player 1" symbol = "X" isActive={activePlayer === "X"}/>
        <Player initialName = "Player 2" symbol = "O" isActive={activePlayer === "O"}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
    
  </main>
  )
}

export default App
 