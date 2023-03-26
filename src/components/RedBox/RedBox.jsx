import React, { useState } from 'react'
import styles from '../BoxesContainer/BoxexContainer.module.css'
import classname from 'classname'

export default function RedBox() {

  return (
    <div className={classname(styles.box, styles.red)}>RedBox</div>
  )
}
