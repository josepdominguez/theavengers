import React, { FC } from 'react'
import { Accordion, Row, Col } from 'react-bootstrap'
import Movie from '../../types/Movie'
import { ReactComponent as Logo } from '../../../src/video.svg';
import './styles.scss'

interface MovieAccordionItemProps {
  movieData: Movie
}

const MovieAccordionItem: FC<MovieAccordionItemProps> = ({ movieData }) => {
  return (
    <Accordion.Item eventKey={movieData.title} key={movieData.title}>
      <Accordion.Header>
        <div className='accordion-trigger'>
          <Logo /><h4 className='mb-2'>{movieData.title}</h4>
          <p>{movieData.summary}</p>
          <div className='cta d-md-none d-xs-block'>
            <a
              href={movieData.imdbUrl}
              className='btn btn-primary'
              target='_blank'
              rel='noopener noreferrer'>IMDB</a>
          </div>
        </div>
        <div className='accordion-cta d-none d-md-block'>
          <a
            href={movieData.imdbUrl}
            className='btn btn-primary'
            target='_blank'
            rel='noopener noreferrer'>IMDB</a>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className='accordion-collapsable'>
          <Row className='mb-2'>
            {movieData.casts.map((castItem) => {
              return <Col key={castItem} sm={6} className='text-start mb-2'><span>{castItem}</span></Col>
            })}
          </Row>
          <Row className='mb-2'>
            <a
              className='text-start'
              href={movieData.fullCastUrl}
              target='_blank'
              rel='noopener noreferrer'>
              See Full Cast
            </a>
          </Row>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default MovieAccordionItem