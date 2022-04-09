import React, { FC } from 'react'
import { Accordion } from 'react-bootstrap'
import Movie from '../../types/Movie'
import MovieAccordionItem from '../MovieAccordionItem'

interface MovieListProps {
  items: Array<Movie>
}

const MovieList: FC<MovieListProps> = ({ items }) => {
  return (
    <Accordion>
      {items.map((item, i) =>
        <MovieAccordionItem key={i} movieData={item} />)}
    </Accordion>
  )
}

export default MovieList