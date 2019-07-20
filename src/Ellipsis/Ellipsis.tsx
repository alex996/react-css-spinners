import './ellipsis.css'
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
  '--rcs-ellipsis-color': string
  '--rcs-ellipsis-size': string
}

const Ellipsis = ({
  className,
  color = '#fff',
  size = 64,
  style
}: Props): JSX.Element => (
  <div
    className={clsx('rcs-ellipsis', className)}
    style={
      {
        '--rcs-ellipsis-color': color,
        '--rcs-ellipsis-size': `${size}px`,
        ...style
      } as Styles
    }
  >
    <div />
    <div />
    <div />
    <div />
  </div>
)

Ellipsis.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Ellipsis
