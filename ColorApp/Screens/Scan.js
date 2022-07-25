import * as React from 'react';
import { StyleSheet, View, Image,Button,TouchableHighlight} from 'react-native';

function Scan ({navigation}) {
    return(
      <View  style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.QuestionStyle}>
        <TouchableHighlight onPress={() => navigation.navigate("Step1")}
        underlayColor="transparent">
         <View style={{flexDirection:'row', alignItems: 'center',}}>
          <Image
          style={{width: 50, height: 50}}
          source={require('../src/assets/Questions.png')}/>
         </View>
        </TouchableHighlight>
        </View>

        <View style={styles.ScanStyle}>
          <Image style = {styles.imagestyle} 
                 source = {require('../src/assets/scan.png')} />
          <Button
          title="Click here"
          onPress={() => navigation.navigate("Cam")}
          />
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    imagestyle: {
            width: 200,
            height: 200,
            resizeMode: 'cover',
            resizeMethod:'contain',
          },
    ScanStyle:
    {
      flex:2.2,
      alignItems:'center',
      elevation:40,
    },
    QuestionStyle:{
      flex:1,
      alignItems:'flex-start',
    }
})

export default Scan;