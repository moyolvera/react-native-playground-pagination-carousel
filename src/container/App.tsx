import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './App.styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="activity" size={20} />
    </SafeAreaView>
  );
};

export default App;
