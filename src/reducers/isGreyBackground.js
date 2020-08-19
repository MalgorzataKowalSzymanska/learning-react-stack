const isGreyBackground = (state = "grey", action) => {
    switch (action.type) {
        case 'changeBackgroundColor':
            return action.value;
        default:
            return state;
    }
}
export default isGreyBackground