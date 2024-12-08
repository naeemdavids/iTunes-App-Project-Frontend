import React, { useState, useEffect } from "react";
import FavoritesBox from "./FavoritesBox";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]); // Data from the backend is stored in state.

  // Ensures that the Favorites page is always updated.
  useEffect(() => {
    getData();
  }, [favorites]);

  // This function receives the data from the data stored in the backend with the fetch request, and stores it in the state.
  const getData = () => {
    fetch("http://localhost:8080/favorites")
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="d-flex resultsFoundBox m-2">
        <Link to="/">
          <button className="btn btn-lg btn-outline-light">Back To List</button>
        </Link>
        <h2 className="text-warning border border-warning rounded m-1 p-1">
          Favorites Found: {favorites.length}
        </h2>
      </div>

      <div className="row g-4">
        {/* This map method maps through the array received from the state. In this case the favorites list */}
        {favorites.map((favorites, id) => (
          <div key={id} className="col-12 col-sm-6 col-md-4">
            <div className="song-card h-100 d-flex flex-column">
              {/* Ensure all cards have the same height */}
              <FavoritesBox favorites={favorites} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
