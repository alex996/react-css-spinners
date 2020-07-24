import './ripple.css'
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
  '--rcs-ripple-color': string
  '--rcs-ripple-size': string
  '--rcs-ripple-thickness': string
}

const Ripple = ({
  className,
  color = '#fff',
  size = 64,
  style,
  thickness = 4,
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-ripple', className)}
    style={
      {
        '--rcs-ripple-color': color,
        '--rcs-ripple-size': `${size}px`,
        '--rcs-ripple-thickness': `${thickness}px`,
        ...style,
      } as Styles
    }
  >
    <div />
    <div />
  </div>
)

Ripple.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default Ripple
