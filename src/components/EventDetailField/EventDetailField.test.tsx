import {render} from '@testing-library/react-native';
import React from 'react';
import {EventDetailField} from '@components';

describe('EventDetailField unit tests', () => {
  it('should render label when it is given', () => {
    const wrapper = render(
      <EventDetailField label={'test label'} content={''} />,
    );

    const label = wrapper.getByText('test label');

    expect(label).not.toBeNull();
  });
});
