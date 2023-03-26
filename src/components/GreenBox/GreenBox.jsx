import React, {useState} from 'react'
import styles from '../BoxesContainer/BoxexContainer.module.css'
import classname from 'classname'
import { Button } from '@mui/material'

export default function GreenBox() {

  const [isWide, setIsWide] = useState(false)

  return (
    <div>
        <div className={classname(styles.box, styles.green,
            {
                [styles.boxWide] : isWide,
            }
            )}>GreenBox</div>
        <Button onClick={() => setIsWide(!isWide)}>Wide toggle</Button>
    </div>
    
  )
}
