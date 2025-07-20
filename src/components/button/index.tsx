import React from 'react'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}

export const Button = ({children}: Props) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}
