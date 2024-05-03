import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<img src="https://th.bing.com/th/id/R.7eca8dbac69cef99ca14241205bf79cc?rik=%2bdJOlqlq2E4IYg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fstar_wars_logo%2fstar_wars_logo_PNG40.png&ehk=VxT9yQBuASJxGdhYTy5YSgu5x4iKDoxPKK1T1mk3Fm8%3d&risl=&pid=ImgRaw&r=0"
					style={{ width: 100, height: 50 }} />
				<div className="ml-auto">
					<button className="btn btn-outline-dark btn-md">Favorites</button>
				</div>
			</div>
		</nav>
	);
};
