import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Clock from "./clock.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<div className="row mx-2 my-2 rounded bg-dark text-white">
			<div className="col-2 my-3"><i class="fa-regular fa-clock fa-5x"></i></div>
			<div className="col-10 d-flex justify-content-end"><h1 className="mt-4 mx-5"><Clock /></h1></div>
		</div>
		<div className="text-center">
			
			<p>
				<img src={rigoImage} />
			</p>

		</div>
		
		</>
		
	);
};

export default Home;
