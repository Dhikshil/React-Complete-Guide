import { useState } from "react"

export default function PLayer({name, symbol}) {
    const [ isEditing, setIsEditing] = useState(false);
    
    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    let showPlayers = <span className = "player-name">{name}</span>

    if (isEditing) {
        showPlayers = <input type = "text " required value={name}></input>
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