import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from './Loading';

describe('Loading component unit tests', () => {
  it('should not render text when it is not given', () => {
    const wrapper = render(<Loading />);
    expect(wrapper.queryByTestId('loading-text')).toBeNull();
  });

  it('should render text when it is given', () => {
    const wrapper = render(<Loading text="Loading..." />);
    expect(wrapper.queryByText('Loading...')).not.toBeNull();
  });
});
