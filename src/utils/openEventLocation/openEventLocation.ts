import {EventDetail} from '@types';
import {Linking, Platform} from 'react-native';
import turkishCharParser from '../turkishCharParser';

const openEventLocation = async (
  eventCenter: EventDetail['EtkinlikMerkezi'],
) => {
  const {KoordinatX, KoordinatY} = eventCenter;

  if (!KoordinatX || !KoordinatY) {
    return;
  }

  const lat = KoordinatX.replace(',', '.');
  const lng = KoordinatY.replace(',', '.');

  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${lat},${lng}`;
  const areaLabel = turkishCharParser(eventCenter.Adi.replace(/\s/g, ''));

  const url = Platform.select({
    ios: `${scheme}${areaLabel}@${latLng}`,
    android: `${scheme}${latLng}(${areaLabel})`,
  });

  await Linking.openURL(url!);
};

export default openEventLocation;
