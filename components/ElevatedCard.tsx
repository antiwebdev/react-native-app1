import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style ={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 8
      },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingStart: 12
    },
    card: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 8
    },
    elevatedCard: {
        backgroundColor: 'blue',
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: 'red'
    }
})