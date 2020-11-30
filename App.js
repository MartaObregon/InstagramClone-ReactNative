
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  Header  from './components/Header';
import Post from './components/Post';
import {db} from './firebase'

function App() {

  const [posts, setPosts] = useState([
    {
        imageUrl:'https://i.pinimg.com/originals/3e/72/6f/3e726f015975ebd9791a2eae433f4d17.jpg', 
        username:"MarianRobinson",
        caption:'a day in my life #loveicecream'
    },
    {
        imageUrl:'https://i.pinimg.com/736x/ec/74/1e/ec741e60e001dbd763ebf869e5aa0c37.jpg',
        username:"lifeonmars9",
        caption:'<3'
    },
    {
      imageUrl:'https://i.redd.it/gzcx7xvhzif31.jpg', 
      username:"ElonMusk",
      caption:'SpaceX is looking for world-class talent.'
    }
  ]);

  useEffect(()=>{
    db.collection('posts').onSnapShot(snaphot =>{
      setPosts(snaphot.docs.map((doc=> doc.data())))
    })
  }, [])

  return (
    
      <SafeAreaView style={{ flex: 0, backgroundColor:'white', color:'black'}}>
    <StatusBar barStyle="dark-content" />
      <View style={styles.app}>
        <Header/>
        <ScrollView contentInset={{bottom: 160}} >
          {
            posts.map((post)=>(<Post username={post.username}
              imageUrl={post.imageUrl}
              caption = {post.caption}
            />))
          }
        </ScrollView>
      
    </View>
    </SafeAreaView>
    
    
    
  );
}

const styles = StyleSheet.create({
  app: {
    margin:0,
    backgroundColor: '#fafafa',
    
    
  },
  
});
 export default App;