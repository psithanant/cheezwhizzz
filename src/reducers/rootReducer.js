const fakeCheeseData = [
  { name: "brie", firmness: "soft", animal: "cow", favorite: 0, id: 1 },
];

const INITIAL_STATE = {
  results: fakeCheeseData,
}

export const rootReducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case 'SEE_ALL_CHEESES_FULFILLED':
      return {results: action.payload};
    case 'GET_RANDOM_CHEESE_FULFILLED':
      return {results: action.payload};
    default:
      return state;
  }
}
