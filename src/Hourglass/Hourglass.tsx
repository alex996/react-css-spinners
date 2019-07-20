import './hourglass.css'
import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

interface Props {
  className?: string
  color?: string
  size?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rcs-hourglass-color': string
  '--rcs-hourglass-size': string
}

const Hourglass = ({
  className,
  color = '#fff',
  size = 64,
  style
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-hourglass', className)}
    style={
      {
        '--rcs-hourglass-color': color,
        '--rcs-hourglass-size': `${size}px`,
        ...style
      } as Styles
    }
  />
)

Hourglass.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Hourglass
