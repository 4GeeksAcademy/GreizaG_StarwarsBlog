import React from "react";
import { Link } from "react-router-dom";

export const CharacterCard = ({ name, id }) => {

    return (
        <div className="card me-2 col-3 bg-light" style={{ width: "18rem", height: "34rem" }} >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                className="m-1 rounded" />
            <div className="card-body">
                <h5 className="card-title mb-4 fw-lighter font-monospace fs-4 text-danger">{name}</h5>
                <div className="d-flex justify-content-end">
                    <Link to="/character-detail">
                        <button className="btn btn-outline-danger btn-sm">More <i className="fa-solid fa-angles-right"></i></button>
                    </Link>
                </div>
            </div>
        </div >
    )
}