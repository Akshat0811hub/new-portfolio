import React from 'react'
import styles from './style.module.css'

const StyledChip = ({name}) => {
  return (
    <div className={styles.chipContainer}><span>{name}</span></div>
  )
}

export default StyledChip