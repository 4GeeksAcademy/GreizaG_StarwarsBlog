import React from "react";
import { Link } from "react-router-dom";

export const StarshipCard = ({ name, id }) => {

    return (
        <div className="card me-2 col-3 bg-dark">
            <img src={`${id}` == 2 ? "https://i.imgur.com/7Di3y5w.jpeg" :
                `${id}` == 3 ? "https://i.imgur.com/yw3Gstj.jpeg" :
                    `${id}` == 17 ? "https://i.imgur.com/HzKyhvj.jpeg" :
                        `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                className="rounded card-img-top" />
            <div className="card-body">
                <h5 className="card-title mb-4 fw-lighter font-monospace fs-6 fs-md-4" id="starships">{name}</h5>
                <div className="d-flex justify-content-end">
                    <Link to={`/starship-detail/${id}`}>
                        <button className="btn btn-outline-warning btn-sm">More <i className="fa-solid fa-angles-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// 
// 
// 
// 
// 
// 
// 