import React from 'react';
import { render } from '@testing-library/react';

import NxReactComponent from './nx-react-component';

describe('NxReactComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxReactComponent />);
    expect(baseElement).toBeTruthy();
  });
});
