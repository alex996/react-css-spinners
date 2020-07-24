import './wave.css'
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
  '--rcs-wave-color': string
  '--rcs-wave-size': string
  '--rcs-wave-thickness': string
}

const Wave = ({
  className,
  color = '#fff',
  size = 64,
  style,
  thickness = 12,
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-wave', className)}
    style={
      {
        '--rcs-wave-color': color,
        '--rcs-wave-size': `${size}px`,
        '--rcs-wave-thickness': `${thickness}px`,
        ...style,
      } as Styles
    }
  >
    <div />
    <div />
    <div />
  </div>
)

Wave.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default Wave
