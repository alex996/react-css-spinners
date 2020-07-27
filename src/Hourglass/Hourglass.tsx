import './hourglass.css'
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
  '--rcs-hourglass-color'?: string
  '--rcs-hourglass-size'?: string
}

const Hourglass: FC<Props> = ({ className, color, size, style }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-hourglass-color'] = color)
  size && (varStyle['--rcs-hourglass-size'] = `${size}px`)

  return <div className={clsx('rcs-hourglass', className)} style={varStyle} />
}

Hourglass.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Hourglass
