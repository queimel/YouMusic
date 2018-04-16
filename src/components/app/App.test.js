import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../setupTests';
import tempPolyfills from '../../tempPolyfills';
import App from './App';


const app = shallow(<App />);


it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});