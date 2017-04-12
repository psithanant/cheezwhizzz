import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ResultTable from './resultTable';
import toJson from 'enzyme-to-json';

const TEST_CHEESE_LIST = [
  { name: "brie", firmness: "soft", animal: "cow", favorite: 0, id: 1 }
];

describe('ResultTable', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultTable cheeses={TEST_CHEESE_LIST} />, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <ResultTable cheeses={TEST_CHEESE_LIST} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
