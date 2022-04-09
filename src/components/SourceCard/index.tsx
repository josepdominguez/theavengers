import React, { FC } from 'react'
import { Card as BootstrapCard } from 'react-bootstrap'
import Source from '../../types/Source'
import './styles.scss'

interface CardProps {
  data: Source;
}

/** Card that renders data of type Source */
const Card: FC<CardProps> = ({ data }) => (
  <BootstrapCard>
    <BootstrapCard.Body>
      <BootstrapCard.Title className='text-start' as='h4'>{data.name}</BootstrapCard.Title>
      <BootstrapCard.Text className='text-start mb-4'>{data.summary}</BootstrapCard.Text>
      <div className='text-start'>
        <BootstrapCard.Link className='btn btn-secondary' href={data.websiteUrl} target='_blank'>
          WEBSITE
        </BootstrapCard.Link>
        <BootstrapCard.Link className='btn btn-primary' href={data.wikiUrl} target='_blank'>
          WIKI
        </BootstrapCard.Link>
      </div>
    </BootstrapCard.Body>
  </BootstrapCard>
)

export default Card