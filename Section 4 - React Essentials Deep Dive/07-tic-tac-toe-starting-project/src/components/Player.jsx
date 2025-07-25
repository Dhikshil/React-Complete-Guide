import { use } from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing] = useState(false);

    let playerName = <span className="player-name">{name}</span>;

    function handleEditing() {
        setIsEditing((editing) => !editing);
    };

    if (isEditing) {
        playerName = <input></input>
    };

    return (
        <li>
            <span>
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}