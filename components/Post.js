import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Avatar } from 'react-native-paper';

const Post = () => {
    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <Avatar.Image style={styles.postAvatar} size={40} source={{uri:'https://randomuser.me/api/portraits/women/3.jpg'}} />
                <Text>MarianRobinson</Text>
                

            </View>
            <Image
            style={styles.postImage}
            source={{uri:'https://i.pinimg.com/originals/3e/72/6f/3e726f015975ebd9791a2eae433f4d17.jpg'}}
            />
            <View style={styles.postCaption}>
                <Text style={{fontWeight:'bold'}}>Username:</Text>
                <Text> caption lores esptum gapset ksksp</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    post:{
        width:'100%',
        height: '100%',
        display:'flex',
        flexDirection:'column',
        
        backgroundColor:'white',
        
        
    },
    postHeader:{
        paddingTop:10,
        marginLeft:10,
        marginBottom:5,
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
    },
    postAvatar:{
        marginRight:10
    },
    postImage: {
        width:'100%',
        height: 300,
        resizeMode:'cover',
        borderTopColor:'lightgray',
        borderTopWidth:1,
        borderBottomColor:'lightgray', 
        borderBottomWidth:1,
    }, 
    postCaption: {
        height:'100%',
        paddingTop:10,
        marginLeft:10,
        display:'flex', 
        flexDirection:'row'
    },

})
export default Post
