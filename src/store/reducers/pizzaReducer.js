import {
    SET_USERNAME, SET_NUMBER_OF_PEOPLE, RESET_FORM
} from '../consts'


const initstate = {
    username: "",
    numberOfPeople: 2
}

export const pizzaReducer = (state=initstate, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state, 
                username: action.payload.username
            }
        case SET_NUMBER_OF_PEOPLE:
            return {
                ...state, 
                numberOfPeople: action.payload.numberOfPeople
            }
            default:
                return state
    }
}