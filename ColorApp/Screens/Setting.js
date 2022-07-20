import React, { Component } from 'react';
import { Switch, StyleSheet, Text, View, Dimensions } from 'react-native';
import Countries from '../OptionBar/Option_Countries';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.label = {false:'Off',true:'On'}
        this.state = {switch1Value: true,switch2Value: true}
    }

    render() {
        return (
              <View style={{flex:1,justifyContent:'space-around',alignItems: 'center', backgroundColor:'#dff9d2'}}>

                <Text style={[styles.baseText,styles.Setting_Block]}>
                  Dark Mode:{this.label[this.state.switch1Value]}
                   <Switch 
                    thumbColor={"#000000"}
                    trackColor={{false:"#eeeeee",true:"#999999"}}
                    onValueChange = {(value) => this.setState({switch1Value: value})}
                    value = {this.state.switch1Value}
                    style={styles.Switchstyle}
                  />
                </Text>

                <Text style={[styles.baseText,styles.Setting_Block]}>
                  Country:<Countries />
                </Text>

                <Text style={[styles.baseText,styles.Setting_Block]}>
                  Notification:{this.label[this.state.switch2Value]}
                   <Switch 
                    thumbColor={"#000000"}
                    trackColor={{false:"#eeeeee",true:"#999999"}}
                    onValueChange = {(value) => this.setState({switch2Value: value})}
                    value = {this.state.switch2Value}
                    style={styles.Switchstyle}
                  />
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  baseText:{
    fontSize:29,
    fontWeight:'700',
    textAlign:'justify',
    textAlignVertical:'center',
  },
  outputText:{
    color:"blue",
  },
  Setting_Block: {
    color: 'black',
    fontSize: 40,
    textAlign: 'justify',
    textAlignVertical: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.01,
    height: Dimensions.get('window').height / 5,
    borderRadius: 20,
    paddingBottom:20,
  },
  Switchstyle:{
    width: Dimensions.get("window").width/4,
    height:Dimensions.get("window").height/50,
  },

});
