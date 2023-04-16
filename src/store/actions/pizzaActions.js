import { SET_NUMBER_OF_PEOPLE, SET_USERNAME } from "../consts";

export const setUserName = (username) => {
    return {
        type: SET_USERNAME,
        payload: {
            username
        }
    }
}


export const setNumberOfPeople = (numberOfPeople) => {
    return {
        type: SET_NUMBER_OF_PEOPLE,
        payload: {
            numberOfPeople
        }
    }
}


