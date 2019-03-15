import React from 'react'
import styles from './styles.css'

const Ripple = props => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </>
)

export default Ripple
