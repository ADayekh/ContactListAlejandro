import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="https://silver-zebra-wr9vgv76xvg6cgwrj-3000.app.github.dev/contacts">
    	<button className="btn btn-primary m-3">Contact List</button>
  		</a> 
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
