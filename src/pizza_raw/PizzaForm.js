import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNumberOfPeople } from "../store/actions/pizzaActions";

export default function PizzaForm() {

  const numberOfPeople = useSelector(state => state.numberOfPeople)
  const dispatch = useDispatch()

  return (
    <div>
      <label>Enter number of people: </label>
      <input 
      value={numberOfPeople}
      onChange={(event) => {
        const num = Number(event.target.value)
        dispatch(setNumberOfPeople(num))        
    }}
      type="number" />
    </div>
  );
}
