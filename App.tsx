import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './app/screen/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Login label="Test"/>
      <StatusBar style="auto" />
      </View>
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
  content: {
    width: "100%",
    padding: 20
  }
});
