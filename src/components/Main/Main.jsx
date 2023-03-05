import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CarContainer from '../CarContainer/CarContainer'
import Counter from '../Counter/Counter'
import Inputuser from '../Inputuser/Inputuser'

export default function Main() {

const ITEMS= [0,1]
const [loading, setLoading] = useState(true)
const onCountChange = (value) => {
    console.log('Działa z Main', value)
}
const [firstName, setFirstName] = useState('Tomasz')

const [isCounterVisible, setIsCounterVisible] = useState(false)

useEffect(() => {
    console.log('Zmieniono imię')
}, [firstName])


    if (loading) {
        return <div>
            <div>Loading...</div>
            <input type="text" 
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            />
            <Button
            onClick={() => setLoading(false)}
            variant='contained'
            >
                Pokaż dane
            </Button>
            
            </div>
    }

  return (
    <div>
        {
            isCounterVisible ? <Counter name="Zdzisław"/> : null
        }
        <Counter onCountChange={onCountChange}/>
        <br />
        {
            ITEMS.map((el, index) => {
                return (
                    <Counter 
                    key={index}
                    onCountChange={onCountChange}
                    el={el} name='Leszek'/>
                )
            })
        }
        <br />
        <Inputuser />
        <CarContainer />
    </div>
  )
}
