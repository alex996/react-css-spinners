import './ripple.css'
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
  '--rcs-ripple-color'?: string
  '--rcs-ripple-size'?: string
  '--rcs-ripple-thickness'?: string
}

const Ripple: FC<Props> = ({ className, color, size, style, thickness }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-ripple-color'] = color)
  size && (varStyle['--rcs-ripple-size'] = `${size}px`)
  thickness && (varStyle['--rcs-ripple-thickness'] = `${thickness}px`)

  return (
    <div className={clsx('rcs-ripple', className)} style={varStyle}>
      <div />
      <div />
    </div>
  )
}

Ripple.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default Ripple
