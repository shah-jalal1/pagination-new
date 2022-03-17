import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe("home page", ()=> {
    test('when loading true loading should be dispayed', () => {
        render(<Home />)
    });
    
})