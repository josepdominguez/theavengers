import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import MovieList from './components/MovieList'
import MovieSources from './components/MovieSources'
import listOfMovies from './json/movies.json'
import listOfSources from './json/movie_sources.json'

function App() {
  return (
    <div className='App'>
      <section className='bkg-fill'>
        <Container>
          <h2 className='section-title'>Avengers Movies</h2>
          <MovieList items={listOfMovies} />
        </Container>
      </section>
      <section>
        <Container>
          <h2 className='section-title'>Movie Sources</h2>
          <MovieSources items={listOfSources} />
        </Container>
      </section>
    </div>
  )
}

export default App
