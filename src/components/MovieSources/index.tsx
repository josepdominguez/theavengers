import React, { FC } from 'react'
import Card from '../Card/index'
import Source from '../../types/Source'
import { Row, Col } from 'react-bootstrap'

interface MovieSourcesProps {
  items: Array<Source>
}

const MovieSources: FC<MovieSourcesProps> = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col sm={12} md={6} key={item.name}><Card source={item} /></Col>
      ))}
    </Row>)
}

export default MovieSources