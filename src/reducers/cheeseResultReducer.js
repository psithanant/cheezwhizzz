const INITIAL_STATE = [
  { name: "brie", firmness: "soft", animal: "cow", favorite: 0, id: 1 },
];

const cheeseResultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEE_ALL_CHEESES_FULFILLED':
    case 'GET_RANDOM_CHEESE_FULFILLED':
    case 'SEE_SUBSTITUTES_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default cheeseResultReducer
