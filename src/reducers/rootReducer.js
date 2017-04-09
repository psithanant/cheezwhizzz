const fakeCheeseData = [
  {name: "brie", hardness: "soft", animal: "cow", favorite: 0, id: 1},
];

const INITIAL_STATE = {
  results: fakeCheeseData,
  query: ''
}

export const rootReducer = (state = INITIAL_STATE, action) => {
  return state;
}
