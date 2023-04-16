import React from "react";
import { useSelector } from "react-redux";

export default function PizzaAnswer() {

  const numberOfPeople = useSelector(state => state.numberOfPeople)
  const username = useSelector(state => state.username)

  const numberOfPizzas = numberOfPeople/ 2

  return <h3>{username}, you should probably order {numberOfPizzas} pizzas!!</h3>;
}
