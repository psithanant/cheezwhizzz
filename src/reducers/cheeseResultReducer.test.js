import reducer from '../../src/reducers/cheeseResultReducer';

describe('Cheese Result Reducer', () => {
    it('has a default state', () => {
        expect(reducer(undefined, {})).toEqual([
                {
                    name: "brie",
                    firmness: "soft",
                    animal: "cow",
                    favorite: 0,
                    id: 1
                }
            ])
    })
});
