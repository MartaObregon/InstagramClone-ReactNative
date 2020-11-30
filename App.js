
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  Header  from './components/Header';
import Post from './components/Post';

function App() {
  return (
    
      <SafeAreaView style={{ flex: 0, backgroundColor:'white', color:'black'}}>
    <StatusBar barStyle="dark-content" />
      <View style={styles.app}>
      <Header/>
      <ScrollView style={{height:1000}}>
      <Post/>
      
      
      
      
      

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