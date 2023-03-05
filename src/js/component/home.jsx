import React from "react";


import rigoImage from "../../img/rigo-baby.jpg";
import Value1 from "./value1.jsx";
import Value2 from "./value2.jsx";
import Value3 from "./value3.jsx";
import Value4 from "./value4.jsx";
import Value5 from "./value5.jsx";
import Value6 from "./value6.jsx";

const Home = () => {
	return (
		<>
		<div className="row mx-2 my-2 rounded bg-dark text-dark d-flex justify-content-center">
			<div className="col-1 my-3 mx-3 bg-light rounded"><i class="fa-regular fa-clock fa-5x my-1"></i></div>
			<div className="col-1 my-3 mx-3 bg-light rounded"><h1 className="d-flex justify-content-center my-3"><Value6 /></h1></div>
			<div className="col-1 my-3 mx-3 bg-light rounded"><h1 className="d-flex justify-content-center my-3"><Value5 /></h1></div>
			<div className="col-1 my-3 mx-3 bg-light rounded"><h1 className="d-flex justify-content-center my-3"><Value4 /></h1></div>
			<div className="col-1 my-3 mx-3 bg-light rounded"><h1 className="d-flex justify-content-center my-3"><Value3 /></h1></div>
			<div className="col-1 my-3 mx-3 bg-light rounded"><h1 className="d-flex justify-content-center my-3"><Value2 /></h1></div>
			<div className="col-1 my-3 mx-3 bg-light rounded"><h1 className="d-flex justify-content-center my-3"><Value1 /></h1></div>
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
