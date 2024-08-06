import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Tim Jackson',
            status: 'the one compay administrator',
            imageUrl: 'https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg'
        },
        {
            uid: 2,
            name: 'Tim Jackson',
            status: 'the one compay administrator',
            imageUrl: 'https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg'
        },
        {
            uid: 3,
            name: 'Tim Jackson',
            status: 'the one compay administrator',
            imageUrl: 'https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg'
        },
        {
            uid: 4,
            name: 'Tim Jackson',
            status: 'the one compay administrator',
            imageUrl: 'https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg'
        }
    ]

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View 
             key={uid}
             style={styles.userCard}
            >
                <Image
                    source={{
                        uri: imageUrl
                    }} 
                    style={styles.userImg}
                />
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>  
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 20,
        color: '#333'
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userCard: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 3
    },
    userImg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginBottom: 15
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    userStatus: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center'
    }
})