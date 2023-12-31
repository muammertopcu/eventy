import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import SearchBar from './SearchBar';

describe('SearchCard unit test', () => {
  it('should trigger onSearch when typed', async () => {
    const mockOnSearch = jest.fn();
    const wrapper = render(
      <SearchBar onSearch={mockOnSearch} debounce={250} />,
    );
    const input = wrapper.getByTestId('search-input');

    fireEvent(input, 'onChangeText', 'test');

    await waitFor(
      () => {
        expect(mockOnSearch).toBeCalledWith('test');
      },
      {timeout: 300},
    );
  });

  it('should render icon by default', () => {
    const wrapper = render(<SearchBar onSearch={jest.fn()} />);
    const icon = wrapper.getByTestId('search-icon');

    expect(icon).toBeTruthy();
  });

  it('should not render icon when showIcon is false', () => {
    const wrapper = render(<SearchBar onSearch={jest.fn()} showIcon={false} />);
    const icon = wrapper.queryByTestId('search-icon');

    expect(icon).toBeNull();
  });

  it('should draw bottom line by default', () => {
    const wrapper = render(<SearchBar onSearch={jest.fn()} />);
    const container = wrapper.getByTestId('search-container');

    expect(container?.props.style[1]).toMatchObject({borderBottomWidth: 1});
  });

  it('should not draw bottom line when lineless is true', () => {
    const wrapper = render(<SearchBar onSearch={jest.fn()} lineless />);
    const container = wrapper.getByTestId('search-container');

    expect(container?.props.style[1]).toBe(false);
  });
});
