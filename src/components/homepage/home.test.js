import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Home } from './home';
import toJson from 'enzyme-to-json';

const TEST_CHEESE_LIST = [
  { name: "brie", firmness: "soft", animal: "cow", favorite: 0, id: 1 }
];

describe('Home', () => {
  it('renders', () => {
    const div = document.createElement('div');
    shallow(<Home results={TEST_CHEESE_LIST} />, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <Home results={TEST_CHEESE_LIST} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
