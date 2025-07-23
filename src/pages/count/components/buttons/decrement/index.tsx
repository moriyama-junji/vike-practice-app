import React, { Dispatch, SetStateAction } from 'react'
import * as css from './styles.module.scss'

type Props = {
  setCount: Dispatch<SetStateAction<number>>
}

export const Decrement = ({ setCount } : Props) => {

  return (
    <button
    className={css.button}
    onClick={() => setCount(prev => prev - 1)}
    >MINUS</button>
  )
}
