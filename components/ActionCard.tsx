import { 
    Image,
    Linking, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWeb(websiteLink: string){
        Linking.openURL(websiteLink);
    } 
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>BlockCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Hi, what’s up?
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg'
        }}
        style={styles.cardImage}
        resizeMode='cover'
        />
        <View style={styles.cardBodyContainer}>
            <Text style={styles.cardBodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </View>
        <View style={styles.cardFooterContainer}>
            <TouchableOpacity
            onPress={() => openWeb('https://reactnative.dev/docs/linking?language=typescript')}
            >
                <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWeb('https://loremipsum.io/ru')}
            >
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 8,
        alignSelf: 'flex-start'
    },
    card: {
        width: '95%',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    elevatedCard: {
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    headingContainer: {
        backgroundColor: '#f8f9fa',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    },
    cardImage: {
        width: '100%',
        height: 200,
    },
    cardBodyContainer: {
        padding: 15,
    },
    cardBodyText: {
        color: '#333'
    },
    cardFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#dee2e6'
    },
    socialLinks: {
        color: '#007bff',
        fontWeight: 'bold'
    }
});
