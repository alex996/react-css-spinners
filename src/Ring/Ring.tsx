import './ring.css'
import React from 'react'
import PropTypes from 'prop-types'

interface RingProps {
  className?: string
}

const Ring = ({ className = '' }: RingProps): JSX.Element => (
  <div className={`rcs-ring${className ? ` ${className}` : ''}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
)

Ring.propTypes = {
  className: PropTypes.string
}

export default Ring
