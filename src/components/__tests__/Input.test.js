import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input Component', () => {
  it('check for input selector', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').length).toBe(1);
  });

  it('check for input selector', () => {
    const wrapper = shallow(
      <Input>
        <input className="InputComponent" />
      </Input>
    );
    expect(wrapper.find('input').length).toBe(1);
  });
});
