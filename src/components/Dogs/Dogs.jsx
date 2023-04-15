import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function Dogs() {

const [dogs, setDogs] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [errorMsg, setErrorMsg] = useState('')

    const getPost = async () => {
        setIsLoading(true)
        try {
            const {data: res} = await axios.get('https://dog.ceo/api/breeds/image/random')
            setDogs(res.message)
        }
        catch (e){
            setErrorMsg('Failed')
        }
        finally {
            setIsLoading(false)
        }
    }


const showImg = () => {
    getPost()
}

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Button
        disabled={isLoading}
        onClick={showImg}
        variant='contained'
        >
        {
            isLoading ?
            (
                <div>Ładowanie</div>
            )
            :
            (
                <div>Pokaż obrazek</div>
            )
        }
        </Button>
        <div style={{style: 'red'}}>{errorMsg}</div>
        <img style={{marginTop: '2em', width: '200px', height: '200px'}} src={dogs} alt="" />
    </div>
  )
}
