import React from 'react';
import {render} from '@testing-library/react-native';
import Error from './Error';

describe('Error component unit test', () => {
  it('should not render text when it is not given', () => {
    const wrapper = render(<Error />);
    expect(wrapper.queryByTestId('error-text')).toBeNull();
  });

  it('should render text when it is given', () => {
    const wrapper = render(<Error error="Error!" />);
    expect(wrapper.queryByText('Error!')).not.toBeNull();
  });
});
