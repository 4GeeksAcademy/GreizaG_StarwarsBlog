import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({ name, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card me-2 col-3 bg-dark">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="rounded-top card-image-top"
      />
      <div className="card-body">
        <h5 className="card-title mb-4 fw-lighter font-monospace fs-6 fs-md-4 text-danger">
          {name}
        </h5>
        <div className="d-flex justify-content-between">
          <p className="text-light">
            <i
              className={`fa-solid fa-heart-circle-${
                store.favorites.find((favorite) => favorite.name == name)
                  ? "check text-danger"
                  : "plus"
              } fs-3 addFavorite`}
              onClick={() => {
                actions.addFavorite(id, name);
              }}
            ></i>
          </p>
          <Link to={`/character-detail/${id}`}>
            <button className="btn btn-outline-danger btn-sm">
              More <i className="fa-solid fa-angles-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
