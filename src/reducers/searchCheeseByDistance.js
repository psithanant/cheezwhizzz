const distance_reducer = (state = [], action) => {
    switch (action.type) {
        case 'DO_SEARCH_FULFILLED':
            return action.payload;
        case 'DO_SEARCH_FAILED':
            console.log('did i fail');
        default:
            return state
    }
}

export default distance_reducer
