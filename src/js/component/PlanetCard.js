import React from "react";
import { Link } from "react-router-dom";

export const PlanetCard = ({ name, id }) => {

    return (
        <div className="card me-2 col-3 bg-dark">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` == "https://starwars-visualguide.com/assets/img/planets/1.jpg" ?
                "https://i.imgur.com/0zP3R0i.jpeg" :
                `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                className="m-1 rounded card-image-top" />
            <div className="card-body">
                <h5 className="card-title mb-4 fw-lighter font-monospace fs-6 fs-md-4" id="planets">{name}</h5>
                <div className="d-flex justify-content-end">
                    <Link to={`/planet-detail/${id}`}>
                        <button className="btn btn-outline-danger btn-sm">More <i className="fa-solid fa-angles-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}