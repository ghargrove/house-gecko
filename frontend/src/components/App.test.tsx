import React from 'react';

import { shallow } from 'enzyme';

import { App } from './App';

describe('My application', () => {
  it('renders cool text', () => {
    const wrapper = shallow(<App text="hello world" />);
    expect(wrapper.text()).toEqual('Hello world');
  });
});
