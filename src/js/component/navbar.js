import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<img src="https://th.bing.com/th/id/OIP.VfizfkgVsjjFY8lHR2R1JAHaEK?rs=1&pid=ImgDetMain"
					style={{ width: 45, height: 35 }} />
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-dark btn-sm">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
