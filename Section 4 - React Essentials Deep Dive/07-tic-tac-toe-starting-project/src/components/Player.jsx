import { useState } from "react";

export default function Player({ initalName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initalName);
    const [ isEditing, setIsEditing] = useState(false);

    let editPlayerName = <span className="player-name">{playerName}</span>;

    function handleEditing() {
        setIsEditing((editing) => !editing);
    };

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handlePlayerNameChange} />
    };

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}