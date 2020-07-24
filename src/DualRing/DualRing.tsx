import './dual-ring.css'
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
  '--rcs-dual-ring-color': string
  '--rcs-dual-ring-size': string
  '--rcs-dual-ring-thickness': string
}

const DualRing = ({
  className,
  color = '#fff',
  size = 64,
  style,
  thickness = 5,
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-dual-ring', className)}
    style={
      {
        '--rcs-dual-ring-color': color,
        '--rcs-dual-ring-size': `${size}px`,
        '--rcs-dual-ring-thickness': `${thickness}px`,
        ...style,
      } as Styles
    }
  />
)

DualRing.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default DualRing
