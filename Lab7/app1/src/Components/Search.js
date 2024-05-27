import React from "react";
import {useState} from 'react';
import "./Search.css"
import APIKey from '../config';

const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';

function Search({setMovieResults})
{
    const [searchTerm, setSearchTerm] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        if(searchTerm)
        {
          fetch(SearchURL + APIKey + "&query=" + searchTerm)
          .then( (resp) => resp.json() )
          .then( (data) => {
            console.log(data.results);
            setMovieResults(data.results);
          })
        }
    
    }

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }

    return (
        <form onSubmit={handleOnSubmit}>
        <input className='search' type="search" placeholder='Search...' value={searchTerm} onChange={handleOnChange}></input>
      </form>
    );
}

export default Search;