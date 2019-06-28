import React from 'react';

import ToDo from '../components/todo/todo.js';

describe('<ToDo />', () => {
  it('uses the Auth component', () => {
    const todo = shallow(<ToDo />);
    expect(todo.find('Auth')).toBeTruthy();
  });
  it('has an Auth with \'read\' capability prop', () => {
    const todo = shallow(<ToDo />);
    expect(todo.find('Auth').at(0).props().capability).toBe('read');
  });
  it('has an Auth with \'create\' capability prop', () => {
    const todo = shallow(<ToDo />);
    expect(todo.find('Auth').at(1).props().capability).toBe('create');
  });
});