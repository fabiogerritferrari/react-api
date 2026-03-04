import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderCard from './Components/RenderCard';

function App() {
  const [actors, setActors] = useState([]);
  const [genre, setGenre] = useState('actors');

  function fetchActors(genre) {
    axios.get(`https://lanciweb.github.io/demo/api/${genre}/`)
      .then(response => setActors(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => fetchActors(genre), [genre])


  return (
    <>
      <header className='container d-flex flex-column align-items-center'>
        <h1 className='text-center my-3'>{genre === 'actors' ? "Actor's list" : "Actresses's list"}</h1>
        <button className='btn btn-primary my-2' onClick={() => setGenre('actors')}>Actors</button>
        <button className='btn btn-primary my-2' onClick={() => setGenre('actresses')}>Actresses</button>
      </header>
      <main>
        <div className="container">
          <RenderCard
            actors={actors}
            genre={genre}
          />
        </div>
      </main>
    </>
  )
}

export default App
