import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={{color:'black'}}>Yellow</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={{color:'black'}}>Yellow</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingStart: 12
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card1: {
    backgroundColor: 'red'
  },
  card2: {
    backgroundColor: 'green'
  },
  card3: {
    backgroundColor: 'yellow',
  }
});
