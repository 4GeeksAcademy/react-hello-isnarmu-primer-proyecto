import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			< div className="color">
			<NavBar />
			
			</div>
			
			<Jumbotron />
			
			<section className="container row d-flex justify-content-between center">
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				
			</section >
			<Footer/>
		</div >
	);
};

export default Home;