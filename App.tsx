import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const App = () => {
  // Determine the current color scheme
  const colorScheme = useColorScheme();

  // Check if the current scheme is dark
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        This is {isDarkMode ? 'dark' : 'light'} mode!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 24,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default App;