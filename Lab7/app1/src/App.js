import {useState, useEffect} from 'react';
import './App.css';
import APIKey from './config';
import Movie from './Components/Movie';
import Search from './Components/Search';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';

function App() {
  const [movieResults, setMovieResults] = useState([]); 
  //const movieResults = ['age',4512,true, "aa"];

  useEffect( ()=> {
    fetch(APIURL + APIKey)
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data.results);
        setMovieResults(data.results);
        }
        )
  }
  ,[])

  return (
    <>
    <header>
      <Search setMovieResults={setMovieResults} />
    </header>
    <div className='movie-container'>
    {movieResults.map( (element) => (<Movie key={element.id} {...element}/>)
    )}
    </div>
    </>
  );
}

export default App;
