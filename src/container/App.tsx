import React from 'react';
import { SafeAreaView, Text, Animated } from 'react-native';
import data from '../assets/data';
import styles from './App.styles';
import { Slice, Pagination, Ticker, Circle } from '../components';

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Circle data={data} scrollX={scrollX} />
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Slice item={item} index={index} scrollX={scrollX} />}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
      />
      <Pagination data={data} scrollX={scrollX} />
      <Ticker data={data} scrollX={scrollX} />
      <Text style={styles.logo}>KENAILABS</Text>
    </SafeAreaView>
  );
};

export default App;
