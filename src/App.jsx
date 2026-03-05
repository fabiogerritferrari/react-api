import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderCard from './Components/RenderCard';

function App() {
  const [actors, setActors] = useState([]);
  const [viewActors, setViewActors] = useState(true);

  const [actresses, setActresses] = useState([]);
  const [viewActresses, setViewActresses] = useState(true);


  function fetchActors() {
    axios.get(`https://lanciweb.github.io/demo/api/actors/`)
      .then(response => setActors(response.data))
      .catch(error => console.log(error))
  }

  function fetchActresses() {
    axios.get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then(response => setActresses(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => fetchActors(), []);
  useEffect(() => fetchActresses(), [])


  return (
    <>
      <header className='container'>
        <h1 className='text-center my-3'>{viewActors ? "Actor's list" : "Actresses's list"}</h1>
        <section className='d-flex gap-5 justify-content-center'>
          <button className='btn btn-primary my-2' onClick={() => { setViewActors(true); setViewActresses(false) }}>Actors</button>
          <button className='btn btn-primary my-2' onClick={() => { setViewActresses(true); setViewActors(false) }}>Actresses</button>
          <button className='btn btn-primary my-2' onClick={() => { setViewActresses(true); setViewActors(true) }}>All Actors</button>
        </section>
      </header>
      <main>
        <div className="container d-flex gap-3">
          <section
            className={viewActors ? '' : 'd-none'}
          >
            <RenderCard
              actors={actors}
              view={viewActresses}
            />
          </section>
          <section
            className={viewActresses ? '' : 'd-none'}
          >
            <RenderCard
              actors={actresses}
              view={viewActors}
            />
          </section>
        </div>
      </main>
    </>
  )
}

export default App
