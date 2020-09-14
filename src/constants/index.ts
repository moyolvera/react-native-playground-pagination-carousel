import { Dimensions } from 'react-native';

const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const LOGO_WIDTH = 270;
const LOGO_HEIGHT = 60;
const PAGINATION_DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = DIMENSIONS.WIDTH * 0.6;

export { CIRCLE_SIZE, DIMENSIONS, LOGO_WIDTH, LOGO_HEIGHT, PAGINATION_DOT_SIZE, TICKER_HEIGHT };
