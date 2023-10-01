import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import EventCard from './EventCard';
import data from '__mocks__/event.json';
import type {Event} from '@types';

const mockData = data as Event;

describe('EventCard unit tests', () => {
  it('should trigger onSelect when pressed', () => {
    const mockSelect = jest.fn();
    const wrapper = render(<EventCard data={mockData} onSelect={mockSelect} />);
    const touchable = wrapper.getByTestId('event-card-touchable');

    fireEvent(touchable, 'press');
    expect(mockSelect).toBeCalled();
  });

  it('should render free badge when event is free', () => {
    const wrapper = render(<EventCard data={mockData} onSelect={jest.fn()} />);
    const badge = wrapper.queryByTestId('event-card-free-bade');

    expect(badge).not.toBeNull();
  });

  it('should not render free badge when event is not free', () => {
    const _data = {...data, UcretsizMi: false} as Event;
    const wrapper = render(<EventCard data={_data} onSelect={jest.fn()} />);
    const badge = wrapper.queryByTestId('event-card-free-bade');

    expect(badge).toBeNull();
  });
});
