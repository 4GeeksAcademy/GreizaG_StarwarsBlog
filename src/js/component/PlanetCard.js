import React from "react";

export const PlanetCard = () => {
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img src="https://starwars-visualguide.com/assets/img/planets/1.jpg" alt="Debería aparecer otra imagen"
                onError="this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'"
                className="m-1 rounded" />
            <div className="card-body">
                <h5 className="card-title mb-4 v fs-5">Tatooine</h5>
                <p className="fs-6 fw-lighter mb-4">A Planet</p>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-danger btn-sm justify-content-end">Learn more <i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </div>
    )
}