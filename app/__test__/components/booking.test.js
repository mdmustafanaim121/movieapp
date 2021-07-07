import Booking from '../../components/booking';
import React from 'react';
import renderer from 'react-test-renderer';


describe('Testing Booking component', () => {
    it('Should return booking snapshot',()=>{
       const route={params:
            {
            name:'Black Panther',
            rate:'2', 
            type: 'https://image.ibb.co/f0hhZc/bp.jpg', 
            language:'english'}
       }
        const result = renderer.create(<Booking route={route}/>).toJSON()
        expect(result).toMatchSnapshot()
        })
})
