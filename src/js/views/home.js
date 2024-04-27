import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard"
import { StarshipCard } from "../component/StarshipCard"

export const Home = () => (
	<div className="container mt-5">
		<p className="fw-lighter font-monospace fs-4 text-danger">Characters</p>
		<CharacterCard />
		<hr />
		<p className="fw-lighter font-monospace fs-4" id="planets">Planets</p>
		<PlanetCard />
		<hr />
		<p className="fw-lighter font-monospace fs-4" id="starships">Starships</p>
		<StarshipCard />
	</div>
);
