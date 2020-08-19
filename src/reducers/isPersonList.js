const personListReducer = (state = {}, action) => {
    switch (action.type) {
        case 'listAll':
            return action.value;
        case 'errorAPi':
            return "Error, Not data from api";
        default:
            return state;
    }
}
export default personListReducer;