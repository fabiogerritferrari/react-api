import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderCard from './Components/RenderCard';

function App() {
  const [actors, setActors] = useState([]);

  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(response => setActors(response.data))
      .catch(error => console.log(error))
  }

  useEffect(fetchActors, [])


  return (
    <>
      <header>
        <h1 className='text-center my-3'>Actor's List</h1>
      </header>
      <main>
        <div className="container">
          <RenderCard
            actors={actors}
          />
        </div>
      </main>
    </>
  )
}

export default App
