import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GenreDropdown from "../GenreDropdown/GenreDropdown";
import { useHistory, useParams } from "react-router-dom";

export default function AddMovie() {
  const [selectGenre, setSelectGenre] = useState(0);
  const [selectGenreName, setSelectGenreName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const addMovieFormHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        title: title,
        poster: url,
        description: description,
        genre_id: selectGenre,
      },
    });
    setSelectGenre(0);
    setSelectGenreName("");
    setDescription("");
    setTitle("");
    setUrl("");
    history.push('/');
  };

  const clearForm = (event) => {
    setSelectGenre(0);
    setSelectGenreName("");
    setDescription("");
    setTitle("");
    setUrl("");
  };

  function titleInputHandler(t) {
    setTitle(t);
  }
  function urlInputHandler(u) {
    setUrl(u);
  }
  function descriptionInputHandler(d) {
    setDescription(d);
  }

  return (
    <>
      <h2>Add your favorite movie!</h2>
      <form onSubmit={addMovieFormHandler}>
        <input
          onChange={(e) => titleInputHandler(e.target.value)}
          placeholder="title"
        />
        <input
          onChange={(e) => urlInputHandler(e.target.value)}
          placeholder="Photo Url"
        />
        <textarea
          onChange={(e) => descriptionInputHandler(e.target.value)}
          placeholder="Description"
        ></textarea>
        <GenreDropdown
          setSelectGenre={setSelectGenre}
          setSelectGenreName={setSelectGenreName}
        />
        <button onClick={clearForm}>Cancel</button>
        <button type="submit">Save</button>
      </form>
      <h2>Selected Genre {selectGenreName}</h2>
    </>
  );
}
