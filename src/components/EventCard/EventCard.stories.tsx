import {Meta, StoryObj} from '@storybook/react-native';
import EventCard, {EventCardProps} from './EventCard';
import data from '../../../__mocks__/event.json';
import {Event} from '@types';

const EventCardMeta: Meta<EventCardProps> = {
  title: 'EventCard',
  component: EventCard,
  argTypes: {
    onSelect: {action: 'on selected'},
  },
  args: {
    data: data as Event,
  },
};

export default EventCardMeta;

export const Basic: StoryObj<EventCardProps> = {};
