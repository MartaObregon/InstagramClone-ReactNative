
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

import  Header  from './screens/Header';
import Post from './screens/Post';

import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import { AntDesign } from '@expo/vector-icons'; 

function App() {

  
  const Tab = createBottomTabNavigator();
 

  return (
    
      <SafeAreaView style={{ flex: 0, backgroundColor:'white', color:'black'}}>
    <StatusBar barStyle="dark-content" />
    
    <View style={styles.app}>
        <Header style={styles.header}/>
        <Home/>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        backBehavior='order'
        style={styles.tab}
        tabBarOptions={{
          activeBackgroundColor: '',
          
        }}
        >
      <Tab.Screen name="Home"
       component={Home}
       options={{
         tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
         tabBarLabel: () => null,
       }}
       />
      <Tab.Screen name="Settings" 
      component={Home}
      options={{
        tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />,
        tabBarLabel: ()=> null
      }} />
      <Tab.Screen name="MyAccount"
      component={Home}
      options={{
        tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        tabBarLabel: () => null

      }}/>
    </Tab.Navigator>
    </NavigationContainer>
    </View>
    
      
    </SafeAreaView>
    
    
    
  );
}

const styles = StyleSheet.create({
  app: {
    margin:0,
    backgroundColor: '#fafafa',
    
    
  },
  header: {
    position:'sticky'
  },
  tab:{
    position: 's'
  }
  
});
 export default App;