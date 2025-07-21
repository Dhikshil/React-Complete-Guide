import { useState } from "react"

export default function PLayer({initialName, symbol}) {
    const [ playerName, setPlayerName ] =useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);
    
    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let showPlayers = <span className = "player-name">{playerName}</span>

    if (isEditing) {
        showPlayers = <input type = "text " required value={playerName} onChange={handleChange}></input>
    }

    return (
        <li>
          <span id="player">
          {showPlayers}
          <span className = "player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
} 