import { collapsable } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import * as React from 'react';
import { StyleSheet, View, Text,TouchableHighlight} from 'react-native';

function Scan ({navigation}) {
    return(
      <View  style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.Step_Style}>
          <Text style = {styles.Step_Text}>
            Third Step
          </Text>
        </View>
        <View style={{flex:1}}>
          <Text style = {styles.Content_Text}>
            Content3
          </Text>
          <View style={styles.Next_Back_Style}>
            <TouchableHighlight onPress={() => navigation.navigate("Step2")}
            underlayColor="transparent">
            <Text style = {styles.Back_Text}>Back</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate("Scan2")}
            underlayColor="transparent">
            <Text style = {styles.Next_Text}>Finish</Text> 
            </TouchableHighlight>
          </View>
        </View>

      </View>
    )
}


const styles = StyleSheet.create({
    Next_Back_Style:{
      flex:1,
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'space-around',
      paddingBottom:50,
      backgroundColor:'#6de8d1',
    },
    Step_Style:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'flex-start',
      paddingBottom:30,
      backgroundColor:'#fff',
    },
    Content_Text:{
      fontSize:20,
      backgroundColor:'#6de8d1'
    },
    Step_Text:
    {
      fontSize:40,
      fontWeight:'bold',
    },
    Next_Text:{
      fontSize:35,
      fontWeight:'bold',
    },
    Back_Text:{
      fontSize:35,
      fontWeight:'bold',
    }
})

export default Scan;