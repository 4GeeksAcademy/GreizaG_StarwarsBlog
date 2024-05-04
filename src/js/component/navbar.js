import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://th.bing.com/th/id/R.7eca8dbac69cef99ca14241205bf79cc?rik=%2bdJOlqlq2E4IYg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fstar_wars_logo%2fstar_wars_logo_PNG40.png&ehk=VxT9yQBuASJxGdhYTy5YSgu5x4iKDoxPKK1T1mk3Fm8%3d&risl=&pid=ImgRaw&r=0"
						style={{ width: 100, height: 50 }} />
				</Link>
				<div className="dropstart">
					<button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map((favorite) => {
							return (
								<div key={favorite.name} className="d-flex justify-content-between align-items-center me-2">
									<li className="dropdown-item">{favorite.name}</li>
									<i className="fa-solid fa-heart-circle-minus text-danger"></i>
									<li><hr className="dropdown-divider" /></li>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
