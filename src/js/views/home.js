import React, { useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard.js";
import { PlanetCard } from "../component/PlanetCard"
import { StarshipCard } from "../component/StarshipCard"
import { Context } from "../store/appContext.js"

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid mt-5">
				<p className="fw-lighter font-monospace fs-4 text-danger">Characters</p>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.characters && store.characters.map((character, index) => {
						return (
							<CharacterCard name={character.name} key={character.name} id={character.uid} />
						)
					})}
				</div>
				<hr />
				<p className="fw-lighter font-monospace fs-4" id="planets">Planets</p>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.planets && store.planets.map((planet, index) => {
						return (
							<PlanetCard name={planet.name} key={planet.name} id={planet.uid} />
						)
					})}
				</div>
				<hr />
				<p className="fw-lighter font-monospace fs-4" id="starships">Starships</p>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.starships && store.starships.map((starships, index) => {
						return (
							<StarshipCard name={starships.name} key={starships.name} id={starships.uid} />
						)
					})}
				</div>
			</div>
		</>
	);
};
