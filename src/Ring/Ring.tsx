import './ring.css'
import React, { FC, CSSProperties } from 'react'
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
  '--rcs-ring-color'?: string
  '--rcs-ring-size'?: string
  '--rcs-ring-thickness'?: string
}

const Ring: FC<Props> = ({ className, color, size, style, thickness }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-ring-color'] = color)
  size && (varStyle['--rcs-ring-size'] = `${size}px`)
  thickness && (varStyle['--rcs-ring-thickness'] = `${thickness}px`)

  return (
    <div className={clsx('rcs-ring', className)} style={varStyle}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Ring.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default Ring
