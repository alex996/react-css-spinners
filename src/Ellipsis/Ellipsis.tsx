import React from 'react'
import PropTypes from 'prop-types'

interface EllipsisProps {
  className?: string
}

const Ellipsis = ({ className = '' }: EllipsisProps): JSX.Element => (
  <div className={`rcs-ellipsis${className ? ` ${className}` : ''}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
)

Ellipsis.propTypes = {
  className: PropTypes.string
}

export default Ellipsis
