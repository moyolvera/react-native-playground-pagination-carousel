import { StyleSheet } from 'react-native';
import { PAGINATION_DOT_SIZE } from '../../constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 60,
    flexDirection: 'row',
    height: PAGINATION_DOT_SIZE,
  },
  indicator: {
    width: PAGINATION_DOT_SIZE,
    height: PAGINATION_DOT_SIZE,
    borderRadius: PAGINATION_DOT_SIZE / 2,
    borderColor: 'white',
    position: 'absolute',
    borderWidth: 2,
  },
  wrapper: {
    width: PAGINATION_DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: PAGINATION_DOT_SIZE * 0.3,
    height: PAGINATION_DOT_SIZE * 0.3,
    borderRadius: PAGINATION_DOT_SIZE * 0.15,
  },
});

export default styles;
