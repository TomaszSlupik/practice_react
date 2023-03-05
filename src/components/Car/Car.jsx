import React from 'react'
import { useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Button } from '@mui/material';

export default function Car() {


    const [car, setCar] = useState([
        {
            id: 0,
            name: 'Audi',
        },
        {
            id: 1,
            name: 'Alfa Romeo', 
        }, 
        {
            id: 2, 
            name: 'BMW', 
        }, 
        {
            id: 3, 
            name: 'Opel'
        },
        {
            id: 4, 
            name: 'Skoda'
        },  {
            id: 5, 
            name: 'Volvo'
        }])

  const deleteCar = (id) => {
        const copyCar = [...car]
        const allCar = copyCar.filter((el => el.id !== id))
        setCar(allCar)
  }
  
    return (
    <div>
        {
            car.map((el, index) => {
                return (
                   
                    <ul key={index}>
                        <li>{el.name}  
                        <DeleteRoundedIcon 
                        style={{cursor: 'pointer', color: 'red'}}
                        onClick={() => deleteCar(el.id)}
                        />
                        </li>
                         
                        
                    </ul>
                   
                   
                )
            })
        }
         <Button
         style={{backgroundColor: 'red'}}
         onClick ={() => setCar([])}
        variant='contained'
        >
        Usuń wszytsko
        </Button>
                    
    </div>
  )
}
