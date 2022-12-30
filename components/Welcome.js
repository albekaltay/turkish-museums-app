import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> Welcome.</Text>
        <Text style={styles.subText}> Get started to discover Turkish top of ten museums by clicked button.</Text>

        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container : {
           
            marginVertical:50,
            paddingHorizontal: 40,
            paddingVertical:10,
            backgroundColor: "white",
            opacity:0.7,
            borderTopEndRadius:6

            
    },
    text: {
        color:"black",
        fontSize:25,
        fontWeight:'bold',
        marginBottom:4,
        padding:0,
        textAlign:'left'

    },
    subText:{
        fontSize: 17,
        marginStart:1,
        width:300,
        fontWeight:'600',
        textAlign:'left'
    }
})