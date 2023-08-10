import React from 'react';
import Movie from '../components/Movie';
import {dummy} from '../movieDummy' 

export default function MovieList() {
  return (
    <div className="movie-list">
      {dummy.results.map(item => 
        <Movie 
          key={item.id} 
          title={item.title} 
          poster_path={item.poster_path} 
          vote_average={item.vote_average} 
        />
      )}
    </div>
  );
}