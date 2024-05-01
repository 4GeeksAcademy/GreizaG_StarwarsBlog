import React from "react";

export const CharacterCard = ({ name, id }) => {

    return (
        <div className="card me-2 col-3 bg-light" style={{ width: "18rem" }} >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Debería aparecer otra imagen"
                className="m-1 rounded" />
            <div className="card-body">
                <h5 className="card-title mb-4 fw-lighter font-monospace fs-4 text-danger">{name}</h5>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-danger btn-sm justify-content-end">More <i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </div >
    )
}