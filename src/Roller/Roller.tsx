import './roller.css'
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
  '--rcs-roller-color'?: string
  '--rcs-roller-size'?: string
}

const Roller: FC<Props> = ({ className, color, size, style }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-roller-color'] = color)
  size && (varStyle['--rcs-roller-size'] = `${size}px`)

  return (
    <div className={clsx('rcs-roller', className)} style={varStyle}>
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

Roller.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Roller
