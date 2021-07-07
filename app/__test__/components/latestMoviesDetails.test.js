import LatestMoviesDetails from '../../components/latestMoviesDetails';
import React from 'react';
import renderer from 'react-test-renderer';


describe('Testing Latest Movies', () => {
    it('Should return latest movies snapshot',()=>{
       const route={params:
            {
            name:'Black Panther',
            rate:'2', 
            type: 'https://image.ibb.co/f0hhZc/bp.jpg', 
            language:'english'}
       }
        const result = renderer.create(<LatestMoviesDetails route={route}/>).toJSON()
        expect(result).toMatchSnapshot()
        })
})
