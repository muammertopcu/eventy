import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from './Button';

describe('Button unit tests', () => {
  it('should render text when it is given', () => {
    const wrapper = render(<Button text={'Button'} onPress={() => {}} />);
    expect(wrapper.getByText('Button')).toBeDefined();
  });

  it('should click when it is pressed', () => {
    const mockPress = jest.fn();
    const wrapper = render(<Button text={'Button'} onPress={mockPress} />);
    const touchable = wrapper.getByTestId('button-touchable');

    fireEvent(touchable, 'onPress');
    expect(mockPress).toHaveBeenCalled();
  });
});
