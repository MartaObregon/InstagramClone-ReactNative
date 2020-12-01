
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  Header  from './components/Header';
import Post from './components/Post';

import {API_URL} from './config'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    
    axios.get(`${API_URL}/getposts`)
    .then((response)=>{
      console.log(response.data)
      
      setPosts([...response.data])
      
      
    })
    
  }, [])

  return (
    
      <SafeAreaView style={{ flex: 0, backgroundColor:'white', color:'black'}}>
    <StatusBar barStyle="dark-content" />
      <View style={styles.app}>
        <Header/>
        <ScrollView contentInset={{bottom: 160}} >
          {
            posts.map((post, i)=>(<Post key={i}
              username={post.username}
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