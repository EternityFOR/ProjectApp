//APP root component modify
import { StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {LineChart} from "react-native-chart-kit";

//Page1
function Scan() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#fff'}}>
      <Image style = {styles.imagestyle} 
             source = {require('./src/assets/scan.png')} />
    </View>
  );
}

//Page2
function BodyState() {
  return (
    <View style={{flex:1,flexDirection: 'column',justifyContent:'space-evenly',alignItems: 'center', backgroundColor:'#B0C4DE'}}>
        <Text style={styles.BodyState_Block}>
          CK-enzyme Value = 100
        </Text>
        <LineChart data={{
          labels:["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"],
          datasets:[
            {
              data:[
                80,60,70,75,90,100
              ]
            }
          ]
        }}
        width = {Dimensions.get("window").width}
        height = {220}
        yAxisSuffix = "kda"
        yAxisInterval = {1}
        chartConfig = {{
          backgroundColor :"#e26a05",
          backgroundGradientForm:'#fb8c00',
          backgroundGradientTo:"#fff",
          decimalPlaces:2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style:{
            borderRadius:16
          },
          propsForDots:{
            r:"6",
            strokeWidth:"2",
            stroke:"#ffa726"
          }
        }}
        bezier
        style = {{
          marginVertical: 10,
          borderRadius:16
        }}/>
        <Text style={styles.BodyState_Block}>
          RMS : High Risk 
        </Text>
        <Text style={styles.BodyState_Block}>
          Dangerous!!
        </Text>
        <Text style={styles.BodyState_Block}>
          Suggestions:Reduce training volume
        </Text>
    </View>
  );
}

//Page3
function Profile() {
  return (
    <View style={{flex:1,flexDirection: 'column-reverse',justifyContent:'space-around',alignItems: 'center', backgroundColor:'#B0C4DE'}}>
      <Text style={styles.Profile_Block}>Gender:Male/Female</Text>
      <Text style={styles.Profile_Block}>Age:25</Text>
      <Text style={styles.Profile_Block}>Height:180cm</Text>
      <Text style={styles.Profile_Block}>Weight:70kg</Text>
      <Text style={styles.Profile_Block}>Sport Type:Badminton</Text>
    </View>
  );
}

//Page4
function Setting() {
  return (
    <View style={{flex:1,flexDirection: 'column-reverse',justifyContent:'space-around',alignItems: 'center', backgroundColor:'#B0C4DE'}}>
      <Text style={[styles.baseText,styles.Setting_Block]}>Mode:Light</Text>
      <Text style={[styles.baseText,styles.Setting_Block]}>Area/Language:Mainland China</Text>
      <Text style={[styles.baseText,styles.Setting_Block]}>Notification:On</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

//BottomTab
function MyTabs() {
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

//export App
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

//StyleSheet
const styles = StyleSheet.create({
  //Block
  Scan_Block:{
  },
  BodyState_Block:{
    color:"black",
    fontSize:25,
    textAlign:'center',
    textAlignVertical:'center',
    backgroundColor:"white",
    width: Dimensions.get("window").width/1.01,
    height:Dimensions.get("window").height/10,
    borderRadius:12,
  },
  Profile_Block:{
    color:"black",
    fontSize:29,
    textAlign:'justify',
    textAlignVertical:'center',
    backgroundColor:"white",
    width: Dimensions.get("window").width/1.01,
    height:Dimensions.get("window").height/7,
    borderRadius:12,
  },
  Setting_Block:{
    color:"black",
    fontSize:32,
    textAlign:'justify',
    textAlignVertical:'center',
    backgroundColor:"white",
    width: Dimensions.get("window").width/1.01,
    height:Dimensions.get("window").height/5.3,
    borderRadius:12,
  },
  //Title_Bottom
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
  //
  imagestyle: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    resizeMethod:'contain',
  },
})
