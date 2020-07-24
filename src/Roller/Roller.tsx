import './roller.css'
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
  '--rcs-roller-color': string
  '--rcs-roller-size': string
}

const Roller = ({
  className,
  color = '#fff',
  size = 64,
  style,
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-roller', className)}
    style={
      {
        '--rcs-roller-color': color,
        '--rcs-roller-size': `${size}px`,
        ...style,
      } as Styles
    }
  >
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)

Roller.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Roller
