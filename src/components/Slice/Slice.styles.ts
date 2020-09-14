import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: DIMENSIONS.WIDTH * 0.75,
    height: DIMENSIONS.WIDTH * 0.75,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  textWrapper: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  header: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: DIMENSIONS.WIDTH * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});

export default styles;
