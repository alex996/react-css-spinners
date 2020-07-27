import './dual-ring.css'
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
  '--rcs-dual-ring-color'?: string
  '--rcs-dual-ring-size'?: string
  '--rcs-dual-ring-thickness'?: string
}

const DualRing: FC<Props> = ({ className, color, size, style, thickness }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-dual-ring-color'] = color)
  size && (varStyle['--rcs-dual-ring-size'] = `${size}px`)
  thickness && (varStyle['--rcs-dual-ring-thickness'] = `${thickness}px`)

  return <div className={clsx('rcs-dual-ring', className)} style={varStyle} />
}

DualRing.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  thickness: PropTypes.number,
}

export default DualRing
