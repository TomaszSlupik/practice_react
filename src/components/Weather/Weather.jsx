import { Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'


export default function Weather() {

const [city, setCity] = useState('wpisz miasto')
const [cityDownload, setCityDownload] = useState()
const [errorMsg, setErrorMsg] = useState()
const [loading, setLoading] = useState(false)


const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const BASE_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`;

const getCity = (e) => {
    setCity(e.target.value)
}

const getWeather = async () => {
    try {
        
        const {data: res} = await axios.get(BASE_API_URL)
        setCityDownload(res.main.temp)
        setLoading(false)
    }
    catch (e) {
        setLoading(true)
        setErrorMsg('Nie ma takiego miasta')
    }
}

const onKey = (e) => {
    if (e.key === 'Enter') {
        console.log('hahah')
        getWeather()
    }
}

  return (
    <div>
        <input type="text" 
        onChange={getCity}
        value={city}/>
        <Button
        onKey={onKey}
        variant="outlined"
        onClick={getWeather}
        >
            Pobierz
        </Button>
        <div>{cityDownload}°C</div>
        {
            loading ?
            (
                <div>{errorMsg}</div>
            )
            :
            (
                <div></div>
            )
        }
        
    </div>
  )
}
