import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Search from './screens/Search';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({route})=>({
           tabBarIcon:
            (props)=>{
             console.log(props)
             let iconName;
             if(route.name==="home"){
               iconName = 'home-city-outline'
             }else if(route.name==="search"){
               iconName = "city"
             }
             return <MaterialCommunityIcons name={iconName} size={25} color={props.color} />
           }
         })}
         tabBarOptions={{
           activeTintColor:'white',
           inactiveTintColor:'gray',
           activeBackgroundColor:'#00aaff',
           inactiveBackgroundColor:'#00aaff'
         }}


        >
          <Tab.Screen name="home" component={Home} initialParams={{city:"Edinburgh"}}/>
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
