import { StyleSheet } from 'react-native';
import { TICKER_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 80,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  item: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: 'white',
  },
});

export default styles;
