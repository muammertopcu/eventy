import openEventLocation from './openEventLocation';
import data from '__mocks__/eventCenter.json';
import type {EventDetail} from '@types';

const mockData = data as EventDetail['EtkinlikMerkezi'];

const mockEventCenter: EventDetail['EtkinlikMerkezi'] = mockData;

const mockOpenURL = jest.fn();
jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: mockOpenURL,
}));

describe('checkContentIsValid unit tests', () => {
  it('should not trigger linking if data is invalid', () => {
    openEventLocation({...mockEventCenter, KoordinatX: '', KoordinatY: ''});

    expect(mockOpenURL).not.toHaveBeenCalled();
  });

  it('should return true if field is valid type', () => {
    const expectedURL = 'maps:0,0?q=test_name@32.1234,24.356';
    openEventLocation({
      ...mockEventCenter,
      KoordinatX: '32,1234',
      KoordinatY: '24,356',
    });

    expect(mockOpenURL).toHaveBeenCalledWith(expectedURL);
  });
});
