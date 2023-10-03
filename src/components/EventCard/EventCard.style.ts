import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
  },
  freeBadgeContainer: {
    position: 'absolute',
    top: '10%',
    left: -3,
    backgroundColor: '#64DD17',
    padding: 3,
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  freeBadgeTitle: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  genreBadgeContainer: {
    position: 'absolute',
    bottom: '20%',
    right: -3,
    backgroundColor: '#8E24AA',
    padding: 3,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  genreBadgeTitle: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
