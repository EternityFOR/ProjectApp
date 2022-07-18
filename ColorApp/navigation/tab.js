import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import Scan from'../Screens/Scan';
import BodyState from'../Screens/BodyState';
import Profile from'../Screens/Profile';
import Setting from'../Screens/Setting';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch,ScrollView,TouchableOpacity,StyleSheet, Text, View, Image,Dimensions} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
          initialRouteName="Scan"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Scan"
            component={Scan}
            options={styles.Scan_Title_Bottom}
          />
    
          <Tab.Screen
            name="Information"
            component={BodyState}
            options={styles.BodyState_Title_Bottom}
          />
    
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={styles.Profile_Title_Bottom}
          />
    
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={styles.Setting_Title_Bottom}
          />
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
    Scan_Title_Bottom:{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Icon name={'home-outline'} color={color} size={size} />
      ),
      headerStyle: {
        backgroundColor: '#f65a61',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      }
    },
    BodyState_Title_Bottom:{
      tabBarLabel: 'BodyState',
      tabBarIcon: ({ color, size }) => (
        <Icon name="body-outline" color={color} size={size} />
      ),
      headerStyle: {
        backgroundColor: '#f65a61',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      }
    },
    Profile_Title_Bottom:{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Icon name="options-outline" color={color} size={size} />
      ),
      headerStyle: {
        backgroundColor: '#f65a61',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      }
    },
    Setting_Title_Bottom:{
      tabBarLabel: 'Setting',
      tabBarIcon: ({ color, size }) => (
        <Icon name="settings-outline" color={color} size={size} />
      ),
      headerStyle: {
        backgroundColor: '#f65a61',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      }
    },
})
export default Tabs;