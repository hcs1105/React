import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average}) {
  return (
    <div className="movie-item">
      <img src={IMG_BASE_URL + poster_path} alt="" />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{vote_average}</p>
      </div>
    </div>
  );
}