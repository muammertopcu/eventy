import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  background: {
    width: '100%',
    height: 300,
  },
  eventName: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventInfo: {
    width: width - 20,
    marginHorizontal: 10,
  },
  eventPlace: {
    width: width - 20,
    marginHorizontal: 10,
  },
});
