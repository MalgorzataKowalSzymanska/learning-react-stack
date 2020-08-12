const emptyPersonReducer = (state = '', action) => {
    switch (action.type) {
        case 'addName':
            return 'new Name';
        case 'addSurname':
            return 'new Surname';
        default:
            return state;
    }
}
export default emptyPersonReducer;