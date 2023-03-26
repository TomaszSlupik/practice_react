import React, { Component } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import './CarTestClass.css'

export default class CarTestClass extends Component {

    constructor(props) {
        super(props)
    this.state = {
        state: [
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
            }
        ]
    }
}
    

    deleteCar = (id) => {
        console.log(id)
        const copyCar = [...this.state.state]
        const allCar = copyCar.filter((el => el.id !== id))
        this.setState({state: allCar})
    }

    componentDidMount () {
        
    }


  render() {
    return (
      <div>
        {
            this.state.state.map((el, index) => {
                return (
                    <div key={index} className="cartestclass">
                        <div className="cartestclassBox">
                        <div>{el.name}</div>
                        <DeleteRoundedIcon 
                        onClick={() => this.deleteCar(el.id)}
                        style={{cursor: 'pointer', color: 'red'}}
                        />
                        </div>
                    </div>
                )
            })
        } 
      </div>
    )
  }
}
