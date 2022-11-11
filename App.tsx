import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SignUp from './src/screens/SignUp';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F6F4',
  },
});
