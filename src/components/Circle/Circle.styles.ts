import { StyleSheet } from 'react-native';
import { CIRCLE_SIZE } from '../../constants';

const styles = StyleSheet.create({
  circle: {
    top: '15%',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
