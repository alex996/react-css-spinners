import './grid.css'
import React, { FC, CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { clsx } from '../utils'

interface Props {
  className?: string
  color?: string
  size?: number
  style?: CSSProperties
}

interface Styles extends CSSProperties {
  '--rcs-grid-color'?: string
  '--rcs-grid-size'?: string
}

const Grid: FC<Props> = ({ className, color, size, style }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-grid-color'] = color)
  size && (varStyle['--rcs-grid-size'] = `${size}px`)

  return (
    <div className={clsx('rcs-grid', className)} style={varStyle}>
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
}

Grid.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Grid
