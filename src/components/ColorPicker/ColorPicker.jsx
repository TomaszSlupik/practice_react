import React, { useState } from 'react'
import { Button } from '@mui/material'


export default function ColorPicker() {

const [colorStyleBox, setColorStyleBox] = useState("")


const changeRed = (id) => {   
    setColorStyleBox(id)
}


  return (
    <div>
        <div
        style={{width: '200px', height: '200px', backgroundColor: colorStyleBox}}></div>
        <Button 
        onClick={() => changeRed('red')}
        variant='outlined' style={{color: 'red', border: '1px solid red', marginRight: '0.3em'}}>Red</Button>
        <Button 
        onClick={() => changeRed('green')}
        variant='outlined' style={{color: 'green', border: '1px solid green', marginRight: '0.3em'}}>Green</Button>
        <Button 
        onClick={() => changeRed('blue')}
        variant='outlined' style={{color: 'blue', border: '1px solid blue'}}>Blue</Button>


    </div>
  )
}
