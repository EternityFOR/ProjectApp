import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput,ScrollView,TouchableHighlight,TouchableOpacity,Image} from 'react-native';

class Profile extends Component {
  render(){
    return (
      <View>
      <ScrollView>
        <View style = {{padding:10,width:'100%',backgroundColor:'#000',height:150}}>
          <TouchableOpacity>
            <Image source={require('../src/assets/Black.jpg')}
            style = {{width : 50,height :  50}}></Image>
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style = {{alignItems:'center'}}>
            <Image source = {require('../src/assets/User.png')} style = {{width:130,height:130, borderRadius:100, marginTop:-70}}></Image>
            <Text style = {{fontSize:25,fontWeight:'bold',padding:10}}> Greater Bay </Text>
            <Text style = {{fontSize:15,fontWeight:'bold',color:'grey'}}>23,Male </Text>
        </View>

        <View style = {styles.BlockStyle}>
        <Image source = {require('../src/assets/Height.png')} 
        style = {{width:50,height:50}}></Image>
        <Text style= {styles.TextStyle}> Height:180cm </Text>
        </View>


        <View style = {styles.BlockStyle}>
        <Image source = {require('../src/assets/Weight.png')} 
        style = {{width:50,height:50}}></Image>
        <Text style= {styles.TextStyle}> Weight:75kg </Text>
        </View>


        <View style = {[styles.BlockStyle,{marginBottom:60}]}>
        <Image source = {require('../src/assets/Sport.png')} 
        style = {{width:50,height:50}}></Image>
        <Text style= {styles.TextStyle}> Sport:Badminton </Text>
        </View>

      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  BlockStyle:{
      alignSelf:'center',
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'#fff',
      width:'90%',
      height:120,
      padding:30,
      paddingBottom:22,
      borderRadius:10,
      shadowOpacity:80,
      elevation:15,
      marginTop:20
  },
  TextStyle:{
      fontSize:23,
      color:'#424242',
      marginTop:10,
  }
}
)

export default Profile;



