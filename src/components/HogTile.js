import React, { useState } from "react"
import HogDetails from "./HogDetails"

function HogTile({hog, onClick}) {
    const [showDetails, setShowDetails] = useState(false);

    function handleClick(hog) {
        onClick(hog);
        setShowDetails(true);
    }

    return (
        <div className="hog-tile" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} />
            {showDetails && <HogDetails hog={hog}/>}
                </div>
    )

}
export default HogTile;