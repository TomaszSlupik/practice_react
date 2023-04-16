import Navigation from "./Navigation";
import Title from "./Title";
import  PizzaCalculator from '../pizza_raw/PizzaCalculator'
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../store/actions/pizzaActions";

export const PizzaRaw = () => {

    const username = useSelector(state => state.username)
    const dispatch = useDispatch()
    
    const clearData = () => {
        
    }

        return <div>
     <Button
     variant="outlined"
     onClick={clearData}
     >Clear</Button>
      <Navigation
      />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input  
          value={username}
          onChange={(e) => dispatch(setUserName(e.target.value))}
          />
        </div>
        <Title 
        />
        <PizzaCalculator 
        />
      </main>
    </div>
}