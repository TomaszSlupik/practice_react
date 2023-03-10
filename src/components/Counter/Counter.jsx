import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '@mui/material/Card';
import './Counter.css'

export default function Counter(props) {

    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState()
 

    const countUp  = () => {
        const newValue = count + 1
        setCount(newValue)
        props.onCountChange(newValue)
    }

    const resetCount = () => {
        setCount(0)
        setNewCount(0)
    }

    useEffect(() => {
        console.log('mount')
    }, [])

 

   
  return (
    <div>
        <div className="counter">
            <div>{props.name}</div>
            <div>{props.el}</div>
            <Card style={{position: 'relative', width: '100%', height: '100%'}}>
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <div style={{fontWeight: 'bold'}}>Counter</div>
                    <div>Kliknij na przycisk: {count}</div>
                    <div>Wartość z inputa: {newCount}</div>
                    <Button
                    style={{marginTop: '0.5em'}}
                    variant='contained' 
                    onClick={countUp}
                    >Klik</Button>
                    <Button
                    onClick={resetCount}
                    >
                        Reset
                    </Button>
                    <input type="number" 
                    value={newCount}
                    onChange={(e) => setNewCount(e.target.value)}
                    />
                </div>
            </Card>
        </div>
    </div>
  )
}
