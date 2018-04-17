import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../setupTests';
import tempPolyfills from '../../tempPolyfills';
import Home from './Home';



const home = shallow(<Home />);

it('renders correctly', () => {
    expect(home).toMatchSnapshot();
});

describe('API Caller', () => {
    beforeEach(() => {
    
    });

    

    it('should fetch videos', () => {
    
        return home.instance().getVideos('nouvelle gaia')
            .then((videos) => {
                const { items } = videos
                expect(items[0].snippet.title).toEqual('Nouvelle Gaia - Get Free From Fear');
            });

            
    });
});