const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],

			planets: [],

			starships: [],

			characterDetail: {},
		},
		actions: {
			//Personajes de StarWars
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log("Data: ", data)
						console.log(data.results)
						setStore({ characters: data.results })
					})
					.catch((error) => {
						console.log(error)
					})
			},

			//Planetas de StarWars
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log("Data: ", data)
						console.log(data.results)
						setStore({ planets: data.results })
					})
					.catch((error) => {
						console.log(error)
					})
			},

			//Vehículos de StarWars
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log("Data: ", data)
						console.log(data.results)
						setStore({ starships: data.results })
					})
					.catch((error) => {
						console.log(error)
					})
			},

			//Detalles de personajes
			getCharacterDetail: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then(data => { setStore({ characterDetail: data.result.properties }) })
					.catch(error => { error })
			}
		}
	};
};

export default getState;
