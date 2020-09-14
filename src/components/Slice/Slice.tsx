import React from 'react';
import { View, Animated } from 'react-native';
import { SliceItem } from '../../declaration/types.td';
import { DIMENSIONS } from '../../constants';
import styles from './Slice.styles';

function Slice({ item, index, scrollX }: { item: SliceItem; index: number; scrollX: Animated.Value }) {
  const inputRange = [(index - 1) * DIMENSIONS.WIDTH, index * DIMENSIONS.WIDTH, (index + 1) * DIMENSIONS.WIDTH];
  const inputRangeOpacity = [
    (index - 0.3) * DIMENSIONS.WIDTH,
    index * DIMENSIONS.WIDTH,
    (index + 0.3) * DIMENSIONS.WIDTH,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [DIMENSIONS.WIDTH * 0.1, 0, -DIMENSIONS.WIDTH * 0.1],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [DIMENSIONS.WIDTH * 0.7, 0, -DIMENSIONS.WIDTH * 0.7],
  });
  const opacity = scrollX.interpolate({ inputRange: inputRangeOpacity, outputRange: [0, 1, 0] });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.imageUri}
        style={[
          styles.image,
          {
            transform: [{ scale }],
          },
        ]}
      />
      <View style={styles.textWrapper}>
        <Animated.Text
          style={[
            styles.header,
            {
              opacity,
              transform: [{ translateX: translateXHeading }],
            },
          ]}>
          {item.heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
              transform: [{ translateX: translateXDescription }],
            },
          ]}>
          {item.description}
        </Animated.Text>
      </View>
    </View>
  );
}

export default Slice;
