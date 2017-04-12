import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<App />, div);

  test('snapshots', () => {
    const component = shallow(
      <App />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
