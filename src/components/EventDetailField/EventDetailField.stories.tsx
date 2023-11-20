import {Meta, StoryObj} from '@storybook/react-native';
import {EventDetailFieldProps} from './EventDetailField';
import {EventDetailField} from '@components';

const EventDetailFieldStories: Meta<EventDetailFieldProps> = {
  args: {
    label: 'test label',
    content: '<p>Test Content</p>',
  },
  title: 'EventDetailField',
  component: EventDetailField,
};

export default EventDetailFieldStories;

export const Basic: StoryObj<EventDetailFieldProps> = {};
