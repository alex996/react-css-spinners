import './grid.css'
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
  '--rcs-grid-color': string
  '--rcs-grid-size': string
}

const Grid = ({
  className,
  color = '#fff',
  size = 64,
  style
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-grid', className)}
    style={
      {
        '--rcs-grid-color': color,
        '--rcs-grid-size': `${size}px`,
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
  </div>
)

Grid.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Grid
