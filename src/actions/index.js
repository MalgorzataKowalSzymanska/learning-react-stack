import { green } from "@material-ui/core/colors"

export const addName = (newVal) => {
    return {
        type: 'addName',
        value: newVal
    }
}
export const addSurname = (newVal) => {
    return {
        type: 'addSurname',
        value: newVal
    }
}
export const listAllPeople = (people) => {
    return {
        type: 'listAll',
        value: people.results
    }
}
export const errorAction = () => {
    return {
        type: 'errorAPi',
        value: "Incorrect fetch API with SAGA"
    }
}
export const changeColor = (color) => {
    return {
        type: 'changeBackgroundColor',
        value: color == "grey" ? "white" : "grey"
    }
}