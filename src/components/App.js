import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";

import hogs from "../porkers_data";
console.log("Here's the data you're working with")
console.log(hogs)
function App() {
	const [selectedHog, setSelectedHog] = useState(null);
	

	function handleImageClick(hog){
		setSelectedHog(hog)
	}
	return (
		<div className="App">
			<Nav />
			{hogs.map((hog, index) =>(
			<HogTile key={index} hog={hog} onClick={handleImageClick}/>))}
		</div>
	)
}
export default App;
