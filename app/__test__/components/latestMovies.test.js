import LatestMovies from '../../components/latestMovies';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Testing Latest Movies', () => {
    it('Should return latest movies snapshot',()=>{
        const result = renderer.create(<LatestMovies />).toJSON()
        expect(result).toMatchSnapshot()
        })
})
