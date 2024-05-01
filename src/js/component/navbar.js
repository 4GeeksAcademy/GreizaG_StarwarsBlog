import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<img src="https://th.bing.com/th/id/OIP.VfizfkgVsjjFY8lHR2R1JAHaEK?rs=1&pid=ImgDetMain"
					style={{ width: 100, height: 50 }} />
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-dark btn-md">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
