import React from 'react'
import styles from './styles.css'

const Ring = props => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
)

export default Ring
