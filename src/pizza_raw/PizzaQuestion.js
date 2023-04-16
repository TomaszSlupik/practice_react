import React from "react";
import { useSelector } from "react-redux";

export default function PizzaQuestion() {

  const username = useSelector(state => state.username)

  return <p>How many people are we dealing with, {username}</p>;
}
