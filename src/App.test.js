import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Todo from './components/Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('should render one Todo component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Todo).length).toBe(1);
  });
});
