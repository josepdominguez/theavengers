import React, { FC } from 'react'
import { Card as BootstrapCard } from 'react-bootstrap'
import Source from '../../types/Source'
import './styles.scss'

interface CardProps {
  source: Source;
}

const Card: FC<CardProps> = ({ source }) => (
  <BootstrapCard>
    <BootstrapCard.Body>
      <BootstrapCard.Title className='text-start' as='h4'>{source.name}</BootstrapCard.Title>
      <BootstrapCard.Text className='text-start mb-4'>{source.summary}</BootstrapCard.Text>
      <div className='text-start'>
        <BootstrapCard.Link className='btn btn-secondary' href={source.websiteUrl} target='_blank'>
          WEBSITE
        </BootstrapCard.Link>
        <BootstrapCard.Link className='btn btn-primary' href={source.wikiUrl} target='_blank'>
          WIKI
        </BootstrapCard.Link>
      </div>
    </BootstrapCard.Body>
  </BootstrapCard>
)

export default Card