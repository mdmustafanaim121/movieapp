import getMovies from "../../actions/actions";
import React from 'react';
import renderer from 'react-test-renderer';

describe('Testing Actions', () => {
    it('Should return Action snapshot',()=>{
        expect(getMovies()).toMatchSnapshot()
        })
})
