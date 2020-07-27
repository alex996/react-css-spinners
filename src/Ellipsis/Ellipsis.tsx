import './ellipsis.css'
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
  '--rcs-ellipsis-color'?: string
  '--rcs-ellipsis-size'?: string
}

const Ellipsis: FC<Props> = ({ className, color, size, style }) => {
  const varStyle: Styles = { ...style }
  color && (varStyle['--rcs-ellipsis-color'] = color)
  size && (varStyle['--rcs-ellipsis-size'] = `${size}px`)

  return (
    <div className={clsx('rcs-ellipsis', className)} style={varStyle}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

Ellipsis.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Ellipsis
