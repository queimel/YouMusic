import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../setupTests';
import tempPolyfills from '../../tempPolyfills';
import Search from './search';


const search = shallow(<Search />);


it('renders correctly', () => {
    expect(search).toMatchSnapshot();
});