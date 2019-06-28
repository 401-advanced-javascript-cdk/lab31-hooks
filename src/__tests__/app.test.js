import React from 'react';

import App from '../app.js';

describe('<App />', () => {
  it('renders a Header component', () => {
    const app = shallow(<App />);
    expect(app.find('Header')).toBeTruthy();
  });
  it('renders a ToDo component', () => {
    const app = shallow(<App />);
    expect(app.find('ToDo')).toBeTruthy();
  });
  it('wraps Header and ToDo in LoginContext', () => {
    const app = shallow(<App />);
    expect(app.find('LoginContext').contains(['Header', 'ToDo']))
  });
  it('wraps LoginContext, Header, and ToDo in BrowserRouter', () => {
    const app = shallow(<App />);
    expect(app.find('BrowserRouter').contains(['LoginContext', 'Header', 'ToDo']))
  });
});