import './ripple.css'
import React from 'react'
import PropTypes from 'prop-types'

interface RippleProps {
  className?: string
}

const Ripple = ({ className = '' }: RippleProps): JSX.Element => (
  <div className={`rcs-ripple${className ? ` ${className}` : ''}`}>
    <div />
    <div />
  </div>
)

Ripple.propTypes = {
  className: PropTypes.string
}

export default Ripple
