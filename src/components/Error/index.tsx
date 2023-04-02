import React from 'react'
import styles from './Error.module.scss'
const Error: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Произошла ошибка</h2>
      <p>Повторите попытку позже</p>
    </div>
  )
}

export default Error
