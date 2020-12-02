import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
           <Image 
            style={styles.headerLogo}
            source={{uri: 'https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-700x394.png'}}
            /> 
            
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        backgroundColor:'white',
        padding:10,
    },
    
    headerLogo:{
        width:100,
        height:60,
        resizeMode: 'contain',
        
        
        
    }

})

export default Header