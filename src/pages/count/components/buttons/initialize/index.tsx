import React, { Dispatch, SetStateAction } from 'react'
import * as css from './styles.module.scss'

type Props = {
  // count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const Initialize = ({ setCount } : Props) => {

  return (
    <button
    className={css.button}
    onClick={() => setCount(0)}
    >0</button>
  )
}
