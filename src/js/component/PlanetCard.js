import React from "react";

export const PlanetCard = ({ name, id }) => {

    return (
        <div className="card me-2 col-3 bg-light" style={{ width: "18rem", height: "34rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` == "https://starwars-visualguide.com/assets/img/planets/1.jpg" ?
                "https://starwars-visualguide.com/assets/img/placeholder.jpg" :
                `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                className="m-1 rounded" />
            <div className="card-body">
                <h5 className="card-title mb-4 fw-lighter font-monospace fs-4" id="planets">{name}</h5>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-danger btn-sm justify-content-end">More <i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </div>
    )
}