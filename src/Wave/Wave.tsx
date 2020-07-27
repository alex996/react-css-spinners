import './wave.css'
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
  '--rcs-wave-color'?: string
  '--rcs-wave-size'?: string
  '--rcs-wave-thickness'?: string
}

const Wave: FC<Props> = ({ className, color, size, style, thickness }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-wave-color'] = color)
  size && (varStyle['--rcs-wave-size'] = `${size}px`)
  thickness && (varStyle['--rcs-wave-thickness'] = `${thickness}px`)

  return (
    <div className={clsx('rcs-wave', className)} style={varStyle}>
      <div />
      <div />
      <div />
    </div>
  )
}

Wave.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default Wave
