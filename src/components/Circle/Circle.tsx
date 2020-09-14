import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { SliceList } from '../../declaration/types.td';
import { DIMENSIONS } from '../../constants';
import styles from './Circle.styles';

function Circle({ data, scrollX }: { data: SliceList; scrollX: Animated.Value }) {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      {data.map(({ color }, index) => {
        const inputRange = [
          (index - 0.55) * DIMENSIONS.WIDTH,
          index * DIMENSIONS.WIDTH,
          (index + 0.55) * DIMENSIONS.WIDTH,
        ];
        const scale = scrollX.interpolate({ inputRange, outputRange: [0, 1, 0], extrapolate: 'clamp' });
        const opacity = scrollX.interpolate({ inputRange, outputRange: [0, 0.2, 0] });

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

export default Circle;
