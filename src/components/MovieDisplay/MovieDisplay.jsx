import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function MovieDisplay() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movieDisplay);
  console.log(movie);

  useEffect(() => {
    dispatch({ type: "FETCH_DISPLAY_MOVIE", payload: id });
  }, []);
  return (
    <>
      <button onClick={() => history.push("/")}>Back to Home</button>
      <h2> {movie.title} Details</h2>
      <img src={movie.poster}/>
      <h4>Genres: {movie.genres}</h4>
      <p>{movie.description}</p>
    </>
  );
}
