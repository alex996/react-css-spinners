import './ring.css'
import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

interface Props {
  className?: string
  color?: string
  size?: number
  style?: CSSProperties
  thickness?: number
}

interface Styles extends CSSProperties {
  '--rcs-ring-color': string
  '--rcs-ring-size': string
  '--rcs-ring-thickness': string
}

const Ring = ({
  className,
  color = '#fff',
  size = 64,
  style,
  thickness = 5,
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-ring', className)}
    style={
      {
        '--rcs-ring-color': color,
        '--rcs-ring-size': `${size}px`,
        '--rcs-ring-thickness': `${thickness}px`,
        ...style,
      } as Styles
    }
  >
    <div />
    <div />
    <div />
    <div />
  </div>
)

Ring.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default Ring
