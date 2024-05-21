import React from 'react'
import styles from './Maintanence.module.css'
const Maintenence = ({name}) => {
  return (
    <div className={styles.background_image}>
      <h1>{name} coming soon...!</h1>
    </div>
  )
}

export default Maintenence
