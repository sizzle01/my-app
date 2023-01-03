import React from "react";
import Constants from 'expo-constants';
import { Image, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from "./screens/RestaurantsScreen";
// import { PeopleScreen } from "./screens/PeopleScreen";
// import { DecisionScreen } from "./screens/DecisionScreen";
import DecisionStackScreen from "./screens/DecisionScreen"





console.log("------------------------------------------------------------");
console.log(`RestaurantChooser starting on ${Platform.OS}`);


// Normalized platform identifier to use when code needs to change between
// Android and iOS.
const platformOS = Platform.OS.toLowerCase();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="RestaurantsScreen" component={HomeStackScreen} 
         options={({ route }) => ({
          tabBarIcon: ({ tintColor }) => {
            (
              <Image source={ require("./images/icon-people.png") }
                style={{ width : 32, height : 32, tintColor : tintColor }}
              />
              
            )
          },
         
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'tomato',
        })}
        />
        <Tab.Screen name="RestaurantsScreen" component={DecisionStackScreen} 
         options={({ route }) => ({
          tabBarIcon: ({ tintColor }) => {
            (
              <Image source={ require("./images/icon-decision.png") }
                style={{ width : 32, height : 32, tintColor : tintColor }}
              />
            )
          },
         
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'tomato',
        })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}