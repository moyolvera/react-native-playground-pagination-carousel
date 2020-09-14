import React from 'react';
import { Animated, View } from 'react-native';
import { SliceList } from '../../declaration/types.td';
import { TICKER_HEIGHT, DIMENSIONS } from '../../constants';
import styles from './Ticker.styles';

function Ticker({ data, scrollX }: { data: SliceList; scrollX: Animated.Value }) {
  const inputRange = [-DIMENSIONS.WIDTH, 0, DIMENSIONS.WIDTH];
  const translateY = scrollX.interpolate({ inputRange, outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT] });

  return (
    <View style={styles.wrapper}>
      <View>
        {data.map(({ type }, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.item,
              {
                transform: [{ translateY }],
              },
            ]}>
            {type}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
}

export default Ticker;
