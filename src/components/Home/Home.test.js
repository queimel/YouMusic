import React from 'react';
import { shallow , mount} from 'enzyme';
import setupTests from '../../setupTests';
import tempPolyfills from '../../tempPolyfills';
import Home from './Home';
import Search from '../search/search'
import resultados from '../../../__mocks__/YTResponse'
import SearchList from '../searchList/SearchList'


const home = shallow(<Home />);

it('renders correctly', () => {
    expect(home).toMatchSnapshot();
});

describe('API Caller', () => {

    beforeEach(() => {
        fetch.resetMocks()
    });

    it('should fetch videos', () => {
       fetch.mockResponse(JSON.stringify(resultados))
        return home.instance().getVideos('nouvelle gaia')
            .then((videos) => {
                const { items } = videos
                expect(items[0].snippet.title).toEqual('Nouvelle Gaia - Get Free From Fear');
            });
    });
});

describe('When I do a search', () => {
    let searchBox;
    let onSearch;

    beforeEach(() => {
        onSearch = jest.fn();
        searchBox = mount(<Search  onSearch={onSearch}/>);

    });

    it('Search requires onSearch prop', () => {
        expect(searchBox.props().onSearch).toBeDefined();
    });

    it('search calls onSearch prop', () => {
        const input = searchBox.find('input').first();
        input.simulate('keyUp', { target: { value: 'Name 4' } });
        expect(onSearch).toBeCalled();
    });
});

/*describe('When I do a search', () => {
    let resultList;
    let onClickedVideo;

    beforeEach(() => {
        onClickedVideo = jest.fn();
        resultList = mount(<SearchList  results={resultados} onClickedVideo={onClickedVideo}/>);

    });

    it('SearchList requires results prop', () => {
        console.log(resultados)
        expect(resultList.props().results).toBeDefined();
    });

    it('search calls onSearch prop', () => {
        const input = searchBox.find('input').first();
        input.simulate('keyUp', { target: { value: 'Name 4' } });
        expect(onSearch).toBeCalled();
    });
});*/

describe('Check if there are songs in localStorage', () => {

    it('Check localStorage', () => {
        
    });
    
});