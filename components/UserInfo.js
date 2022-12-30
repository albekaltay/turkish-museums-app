import React from 'react'
import { StyleSheet , View , Image, Text} from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.imageContainer}> 
          <Image style={styles.image}  source={require('../assets/312245310_813247666415280_2782273433625570024_n.jpg')}/>
        </View>
        <Text style={styles.text}>DOĞUKAN ARIK</Text>
        <Text style={styles.email }>dogukan.arik@gmail.com</Text>
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding:10,
    alignContent:'center',
    alignItems:'center',
    opacity:0.7,
    borderRadius:6,
    marginVertical:70,
  },
  imageContainer: {
    height: 150,
    width:150,
    overflow: 'hidden',
    borderWidth:3,
    borderColor: "black",
    borderRadius:200,
    marginBottom:20,
    
  },
  image: {
    height: '100%',
    width: '100%',
  },
  text: {
   fontWeight:'bold',
   fontSize: 20
  },
  email: {
    fontSize:15
  }
  
  });
  