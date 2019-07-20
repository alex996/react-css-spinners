import './circle.css'
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
  '--rcs-circle-color': string
  '--rcs-circle-size': string
}

const Circle = ({
  className,
  color = '#fff',
  size = 64,
  style
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-circle', className)}
    style={
      {
        '--rcs-circle-color': color,
        '--rcs-circle-size': `${size}px`,
        ...style
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
    <div />
    <div />
    <div />
    <div />
  </div>
)

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Circle
