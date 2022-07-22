import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Scan from '../Screens/Scan';
import BodyState from '../Screens/BodyState';
import Profile from '../Screens/Profile';
import Contact from '../Screens/Contact';
import Camera from '../Camera/Camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet,View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function Cam() {
  return (
    <Stack.Navigator      
    screenOptions={{headerShown:false}}>
      <Stack.Screen name="Scan2" component={Scan}/>
      <Stack.Screen name="Cam"  component={Camera} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Scan"
      screenOptions={{
        tabBarActiveTintColor: '#0073E5',
      }}>
      <Tab.Screen
        name="Scan"
        component={Cam}
        options={styles.Scan_Title_Bottom}
      />

      <Tab.Screen
        name="Records"
        component={BodyState}
        options={styles.BodyState_Title_Bottom}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={styles.Profile_Title_Bottom}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={styles.Contact_Title_Bottom}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Scan_Title_Bottom: {
    tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <Icon name={'home-outline'} color={color} size={size} />
    ),
    headerStyle: {
      backgroundColor: '#3bc4ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 35,
    },
  },
  BodyState_Title_Bottom: {
    tabBarLabel: 'BodyState',
    tabBarIcon: ({ color, size }) => (
      <Icon name="body-outline" color={color} size={size} />
    ),
    headerStyle: {
      backgroundColor: '#3bc4ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 35,
    },
  },
  Profile_Title_Bottom: {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color, size }) => (
      <Icon name="options-outline" color={color} size={size} />
    ),
    headerStyle: {
      backgroundColor: '#3bc4ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 35,
    },
  },
  Contact_Title_Bottom: {
    tabBarLabel: 'Contact',
    tabBarIcon: ({ color, size }) => (
      <Icon name="call-outline" color={color} size={size} />
    ),
    headerStyle: {
      backgroundColor: '#3bc4ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 35,
    },
  },
});
