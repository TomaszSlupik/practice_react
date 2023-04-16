import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import BoxesContainer from '../BoxesContainer/BoxesContainer'
import CarContainer from '../CarContainer/CarContainer'
import CarTestClass from '../CarTestClass/CarTestClass'
import ColorPicker from '../ColorPicker/ColorPicker'
import Counter from '../Counter/Counter'
import Inputuser from '../Inputuser/Inputuser'
import MouseMove from '../MouseMove/MouseMove'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Playground from '../Playground/Playground'
import Dogs from '../Dogs/Dogs'
import Weather from '../Weather/Weather'
import {PizzaRaw} from '../../pizza_raw'

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
        <Router>
        <nav style={{textAlign: 'center'}}>
            <ul style={{listStyleType: 'none'}}>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/input">Input</Link>
                </li>
                <li>
                    <Link to="/mousemove">Mouse Move</Link>
                </li>
                <li>
                    <Link to="/carcontainer">Car container</Link>
                </li>
                <li>
                    <Link to="/cartestclass">Car Test Class</Link>
                </li>
                <li>
                    <Link to="/colorpicker">Color Picker</Link>
                </li>
                <li>
                    <Link to="/boxescontainer">Boxes Container</Link>
                </li>
                <li>
                    <Link to="/playground">Playground</Link>
                </li>
                <li>
                    <Link to="/dogs">Pobieranie danych z API</Link>
                </li>
                <li>
                    <Link to="/weather">Pogoda</Link>
                </li>
                <li>
                    <Link to="/pizza-raw">Pizza</Link>
                </li>
                
            </ul>
        </nav>
        
        {/* <Counter onCountChange={onCountChange}/>
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
        } */}
        <br />
        <br />
        <br />
            <Routes>
                <Route exact path='/counter' element={<Counter onCountChange={onCountChange}/>} />
                <Route exact path='/input' element={<Inputuser />} />
                <Route exact path='/mousemove' element={<MouseMove />} />
                <Route exact path='/carcontainer' element={<CarContainer />} />
                <Route exact path='/cartestclass' element={<CarTestClass />} />
                <Route exact path='/colorpicker' element={<ColorPicker />} />
                <Route exact path='/boxescontainer' element={<BoxesContainer />} />
                <Route exact path='/playground' element={<Playground />} />
                <Route exact path='/dogs' element={<Dogs />} />
                <Route exact path='/weather' element={<Weather />} />
                <Route exact path='/pizza-raw' element={<PizzaRaw />} />
            </Routes>
        </Router>
    </div>
  )
}
