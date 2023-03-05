import React, { useState } from 'react'
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Inputuser() {

    const [inputUser, setInputUser] = useState('')
    const [city, setCity] = useState([
        {
            id: 0,
            cityName: 'Kraków'
        }, 
        {
            id: 1,
            cityName: 'Warszawa'
        }
    ])

    const [editInputCity, setEditInputCity] = useState()

    const addToList = (e) => {
        e.preventDefault()
        const newCity = {
            cityName: inputUser
        }

        const allCity = [...city, newCity]

        setCity(allCity) 
        setInputUser('')
       
    }

    const editCity = (name) => {
        const copyCity = [...city]

        const editCity = {
            id: name, 
            cityName: editInputCity
        }
        setCity(copyCity.map(el => el.id === name ? editCity : el))
    }

    const deleteCity = (name) => {
        const copyCity = [...city]
        const allCity = copyCity.filter(el => el.cityName !== name)
        setCity(allCity)
    }
    

  return (
    <div>
        <strong>Cała metoda CRUD:</strong>
        <Card>
        Input do wpisania 
        <form action="" onSubmit={addToList}>
            <input type="text" 
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            />
            <div>Twoje miasto: {inputUser}</div>
            <Button
            variant='outlined'
            onClick={addToList}
            >
                Zapisz
            </Button>
        </form>
        <br />
        <div>
            Lista Twoich miast:
            {
                city.map((el, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                {el.cityName}
                                <input 
                                onChange={(e) => setEditInputCity(e.target.value)}
                                />
                                <EditIcon 
                                onClick={() => editCity(el.id)}
                                />
                                <DeleteIcon 
                                style={{color: 'red', cursor: 'pointer'}}
                                onClick={() => deleteCity(el.cityName)}
                                />
                            </li>
                        </ul>
                    )
                })
            }
            
        </div>
        </Card>
    </div>
  )
}
