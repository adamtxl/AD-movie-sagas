import React, { useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

function MovieList() {

  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  // const displayMovie = event => {
  //   history.push(`/${movie.id}`)
  // };

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img onClick={(e)=>history.push(`/${movie.id}`)} src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
