import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput} from 'react-native';
import Genders from '../OptionBar/Option_Gender';

export default class App extends Component{
  constructor(props){
    super(props);
    this.gender = 'Male';
    this.age = '25';
    this.height = '180';
    this.weight = '70';
    this.sports = 'Badminton';
    this.handleText = (text) => {console.log(text);};
  }
  render(){
    return(
      <View style={{flex:1,justifyContent:'space-around',alignItems: 'center', backgroundColor:'#d2f9f5'}}>
        <View style = {styles.Profile_Block}>
          <View>
            <Text style = {styles.TitleText}>Gender:</Text>
          </View>
          <View>
          <Genders />
          </View>
      </View>

      <View style = {[styles.Profile_Block]}>
          <View>
            <Text style = {styles.TitleText}>Age:</Text>
          </View>

          <View>
            <TextInput
            style = {styles.InputText}
            placeholder = {this.age}
            placeholderTextColor = 'black'
            onChangeText={(text) => this.handleText(text)}
            blurOnSubmit
            keyboardType='numeric'/> 
          </View>
      </View>

      <View style = {[styles.Profile_Block]}>
          <View>
            <Text style = {styles.TitleText}>Height:</Text>
          </View>

          <View>
            <TextInput
            style = {styles.InputText}
            placeholder = {this.height}
            placeholderTextColor = 'black'
            onChangeText={(text) => this.handleText(text)}
            blurOnSubmit
            keyboardType='numeric'/> 
          </View>
      </View>

      <View style = {[styles.Profile_Block]}>
          <View>
            <Text style = {styles.TitleText}>Weight:</Text>
          </View>

          <View>
            <TextInput
            style = {styles.InputText}
            placeholder = {this.weight}
            placeholderTextColor = 'black'
            onChangeText={(text) => this.handleText(text)}
            blurOnSubmit
            keyboardType='numeric'/>  
          </View>
      </View>

      <View style = {[styles.Profile_Block]}>
          <View>
            <Text style = {styles.TitleText}>Sports:</Text>
          </View>

          <View>
            <TextInput
            style = {styles.InputText}
            placeholder = {this.sports}
            placeholderTextColor = 'black'
            onChangeText={(text) => this.handleText(text)}
            blurOnSubmit/>
          </View>
      </View>  
     
    </View>
    );
  }
}


const styles = StyleSheet.create({
    Profile_Block:{ 
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor:"white",
        width: Dimensions.get("window").width/1.05,
        height:Dimensions.get("window").height/6.5,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
    },
    TitleText:{
        paddingTop:50,
        color:"#459fed",
        fontSize:35,
        fontWeight:'700',
    },
    InputText:{
      paddingTop:50,
      color:"black",
      fontSize:35,
      fontWeight:'700',
    }
});

