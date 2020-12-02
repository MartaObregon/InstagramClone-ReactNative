import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Avatar } from 'react-native-paper';

const Post = ({imageUrl, username, caption} ) => {
    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <Avatar.Image style={styles.postAvatar} size={40} source={{uri:'https://randomuser.me/api/portraits/women/3.jpg'}} />
                <Text style={{fontWeight:'bold'}}>{username}</Text>
                

            </View>
            <Image
            style={styles.postImage}
            source={{uri:imageUrl}}
            />
            <View style={styles.postCaption}>
                <Text style={{fontWeight:'bold'}}>{username}</Text>
                <Text  style={{textAlign:'left', flexShrink:1}}> {caption}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    post:{
        width:'100%',
        
        display:'flex',
        flexDirection:'column',
        marginBottom:30,
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
        height: 400,
        resizeMode:'cover',
        borderTopColor:'lightgray',
        borderTopWidth:1,
        borderBottomColor:'lightgray', 
        borderBottomWidth:1,
    }, 
    postCaption: {
        marginLeft:10,
        display:'flex', 
        flexDirection:'row', 
        paddingTop:10,
        height:40,
        flexWrap:'wrap'
        
    },

})
export default Post
