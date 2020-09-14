import { StyleSheet } from 'react-native';
import { LOGO_HEIGHT, LOGO_WIDTH } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
  },
  logo: {
    color: 'white',
    fontWeight: '800',
    letterSpacing: -3,
    fontSize: 50,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotate: '-90deg' },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
    position: 'absolute',
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    left: 10,
    bottom: 10,
  },
});

export default styles;
