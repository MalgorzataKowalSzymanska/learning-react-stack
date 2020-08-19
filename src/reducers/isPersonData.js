const emptyPersonReducer = (state = '', action) => {
    switch (action.type) {
        case 'addName':
            return action.value;
        case 'addSurname':
            return action.value;
        default:
            return state;
    }
}
export default emptyPersonReducer