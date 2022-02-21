import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Dashboard } from './src/screens/Dashboard';


export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard title='React Native Bare Workflow with Typescript' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
