import React from 'react';
import { SliceList } from '../../declaration/types.td';
import { View, Animated } from 'react-native';
import { PAGINATION_DOT_SIZE, DIMENSIONS } from '../../constants';
import styles from './Pagination.styles';

function Pagination({ data, scrollX }: { data: SliceList; scrollX: Animated.Value }) {
  const inputRange = [-DIMENSIONS.WIDTH, 0, DIMENSIONS.WIDTH];
  const translateX = scrollX.interpolate({ inputRange, outputRange: [-PAGINATION_DOT_SIZE, 0, PAGINATION_DOT_SIZE] });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [{ translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.wrapper}>
            <View
              style={[
                styles.item,
                {
                  backgroundColor: item.color,
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
}

export default Pagination;
