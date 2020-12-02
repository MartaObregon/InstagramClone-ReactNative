import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../config'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Post from './Post';



const Home = () => {


const [posts, setPosts] = useState([]);

useEffect(()=>{
    
    axios.get(`${API_URL}/getposts`)
    .then((response)=>{
      console.log(response.data)
      
      setPosts([...response.data])
      
      
    })
    
  }, [])


    return (
        <ScrollView contentInset={{bottom: 160}} >
          {
            posts.map((post, i)=>(<Post key={i}
              username={post.username}
              imageUrl={post.imageUrl}
              caption = {post.caption}
            />))
          }
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})
