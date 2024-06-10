import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function GenreDropdown({setSelectGenre, setSelectGenreName}) {
    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();

    function handleGenreSelect (genre_id, genre_name) {
        setSelectGenre(genre_id);
        setSelectGenreName(genre_name);
    }
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
      }, []);

  return (
    
    <DropdownButton id="dropdown-basic-button" title="Genres">
        
      <Dropdown.Item onClick={()=>handleGenreSelect(1, 'Adventure' )} >Adventure</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(2, 'Animated')} >Animated</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(3, 'Biographical')} >Biographical</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(4, 'Comedy')} >Comedy</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(5, 'Disaster')} >Disaster</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(6, 'Drama')} >Drama</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(7, 'Epic')} >Epic</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(8, 'Fantasy')} >Fantasy</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(9, 'Musical')} >Musical</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(10, 'Romantic')} >Romantic</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(11, 'Science Fiction')} >Science Fiction</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(12, 'Space Opera')} >Space Opera</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleGenreSelect(13, 'Superhero')} >Superhero</Dropdown.Item>
        
    </DropdownButton>
  );
}

export default GenreDropdown;