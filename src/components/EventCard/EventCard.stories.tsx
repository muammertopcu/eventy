import {Meta, StoryObj} from '@storybook/react-native';
import EventCard, {EventCardProps} from './EventCard';

const EventCardMeta: Meta<EventCardProps> = {
  title: 'EventCard',
  component: EventCard,
  argTypes: {
    onSelect: {action: 'on selected'},
  },
  args: {
    data: {
      Adi: 'Event Name',
      UcretsizMi: true,
      KucukAfis: 'https://via.placeholder.com/150',
      BiletSatisLinki: 'https://www.google.com',
      EtkinlikBaslamaTarihi: '2021-01-01T00:00:00',
      EtkinlikBitisTarihi: '2021-01-01T00:00:00',
      EtkinlikMerkezi: 'Event Center',
      EtkinlikUrl: 'https://www.google.com',
      Id: 1,
      KisaAciklama: 'Short Description',
      Resim: 'https://via.placeholder.com/150',
      Tur: 'DİĞER',
    },
  },
};

export default EventCardMeta;

export const Basic: StoryObj<EventCardProps> = {};
