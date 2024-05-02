import React from "react";
import { Link } from "react-router-dom";

export const CharacterDetail = ({ name, id }) => {
    return (
        <>
            <div className="container d-flex row">
                <div className="col">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        className="m-1 rounded" />
                </div>
                <div className="col">
                    <p>Description</p>
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/">
                        <button ClassName="btn btn-outline-danger btn-sm">Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
}