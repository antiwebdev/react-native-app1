import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FansyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
        source={{
            uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }}
        style={styles.cardImage}
        onError={(e) => console.log(e.nativeEvent.error)}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hameleon</Text>
            <Text style={styles.cardLabel}>Regular Hameleon</Text>
            <Text style={styles.cardSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  elevatedCard: {
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardBody: {
    padding: 10,
  },
  cardLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
  }
});