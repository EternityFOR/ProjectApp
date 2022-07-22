import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Linking} from 'react-native';

class Contact extends Component {
    render(){
    return (
      <View>
      <ScrollView>
        <View style = {{alignItems:'center'}}>
            <Text style = {{fontSize:30,fontWeight:'800',paddingTop:80}}> Greater Bay Biotechnology </Text>
            <Text style = {{fontSize:15,fontWeight:'bold',color:'grey',paddingTop:30}}>
            If you have any questions, fell free to contact us.
            </Text>
        </View>

        <View style = {styles.BlockStyle}>
        <Image source = {require('../src/assets/Phone.png')} 
        style = {{width:50,height:50}}></Image>
        <Text onPress={()=>{Linking.openURL(`tel:${66668888}`);}} 
        style={styles.LinkStyle}>+852 6666 8888</Text>
        </View>

        <View style = {styles.BlockStyle}>
        <Image source = {require('../src/assets/Whatsapp.png')} 
        style = {{width:50,height:50}}></Image>
        <Text onPress={()=>{Linking.openURL(`tel:${66668888}`);}} 
        style={styles.LinkStyle}>+852 8888 6666</Text>
        </View>

        <View style = {styles.BlockStyle}>
        <Image source = {require('../src/assets/Email.png')} 
        style = {{width:50,height:50}}></Image>
        <Text onPress={()=>{Linking.openURL('mailto:colin.ng@greaterbay-biotech.com?subject=mailsubject&body=mailbody');}} 
        style={styles.LinkStyle}>colin.ng@greaterbay-biotech.com</Text>
        </View>

        <View style = {styles.BlockStyle}>
        <Image source = {require('../src/assets/Website.png')} 
        style = {{width:50,height:50}}></Image>
        <Text onPress={()=>{Linking.openURL('http://www.greaterbay-biotech.com');}} 
        style={styles.LinkStyle}>http://www.greaterbay-biotech.com</Text>
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
      height:100,
      padding:30,
      paddingBottom:22,
      marginTop:20
  },
  LinkStyle:{
      fontSize:15,
      color:'#000',
      fontWeight:'bold',
      alignSelf:'center',
  }
}
)

export default Contact;
