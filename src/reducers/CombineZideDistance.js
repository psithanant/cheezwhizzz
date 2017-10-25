const combineDistanceZipcode = (state = {}, action) => {
    switch (action.type) {
        case 'STORE_DISTANCE':
            return { ...state, distance: action.text };
        case 'STORE_ZIPCODE':
            return { ...state, zipcode: action.zipcode }
        default:
            return state;
    }
}

export default combineDistanceZipcode;
