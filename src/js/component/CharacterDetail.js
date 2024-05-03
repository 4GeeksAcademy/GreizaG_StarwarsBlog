import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"

export const CharacterDetail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log("Params: ", params)
    useEffect(() => {
        actions.getCharacterDetail(params.id)
    }, [])

    return (
        <>
            <div className="container mt-5 p-3 border border-2 border-danger-subtle rounded-2 bg-dark">
                <div className="d-flex row mb-5">
                    <div className="col">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                            className="m-1 rounded" />
                    </div>
                    <div className="col">
                        <h2 className="text-center text-danger fw-bold">{store.characterDetail.name}</h2>
                        <p className="fw-lighter text-start mt-4 fs-4 text-light">
                            Star Wars, conocida también en español como La guerra de las galaxias,
                            es una franquicia y universo compartido de fantasía compuesta primordialmente
                            de una serie de películas concebidas por el cineasta estadounidense George Lucas
                            en la década de 1970, y producidas y distribuidas inicialmente por 20th Century Fox
                            y posteriormente por The Walt Disney Company a partir de 2012. Su trama describe
                            las vivencias de un grupo de personajes que habitan en una galaxia ficticia e
                            interactúan con elementos como «la Fuerza», un campo de energía metafísico y
                            omnipresente que posee un «lado luminoso» impulsado por la sabiduría, la nobleza y
                            la justicia y utilizado por los Jedi, y un «lado oscuro» usado por los Sith y provocado
                            por la ira, el miedo, el odio y la desesperación.
                        </p>
                    </div>
                </div>
                <hr className="border-danger border border-1" />
                <div className="container mt-5">
                    <div className="d-flex justify-content-between row">
                        <div className="col">
                            <p className="text-danger fw-bold text-center">Name</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.name}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center">Birth Year</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.birth_year}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center">Gender</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.gender}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center">Height</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.height}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center">Skin Color</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.skin_color}</p>
                        </div>
                        <div className="col">
                            <p className="text-danger fw-bold text-center">Eye Color</p>
                            <p className="text-center fw-lighter text-light">{store.characterDetail.eye_color}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/">
                        <button className="btn btn-outline-danger btn-sm">Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}