import React from "react";

export const StarshipCard = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://starwars-visualguide.com/assets/img/starships/1.jpg" alt="Debería aparecer otra imagen"
                onError="this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'"
                className="m-1 rounded" />
            <div className="card-body">
                <h5 className="card-title mb-4 v fs-5">CR90 corvette</h5>
                <p className="fs-6 fw-lighter mb-4">A Starship</p>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-danger btn-sm justify-content-end">More <i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
        </div>
    )
}