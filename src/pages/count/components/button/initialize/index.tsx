import React, { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'

type Props = {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const Initialize = ({ count, setCount } : Props) => {

  return (
    <button
    className={styles.button}
    onClick={() => setCount(0)}
    >0</button>
  )
}
