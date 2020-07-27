import './circle.css'
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
  '--rcs-circle-color'?: string
  '--rcs-circle-size'?: string
}

const Circle: FC<Props> = ({ className, color, size, style }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-circle-color'] = color)
  size && (varStyle['--rcs-circle-size'] = `${size}px`)

  return (
    <div className={clsx('rcs-circle', className)} style={varStyle}>
      <div />
    </div>
  )
}

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Circle
