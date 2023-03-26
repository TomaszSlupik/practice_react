import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Playground() {

    let navigate = useNavigate()

const gotToBack = () => {
    navigate('/', {replace: true})
}

  return (
    <div>
        <Button 
        variant='outlined'
        onClick={gotToBack}>Click</Button>
    </div>
  )
}
