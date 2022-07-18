import React from 'react';
import { Switch,StyleSheet, Text, View,Dimensions} from 'react-native';

const Setting = ({navigation}) => {
    return (
        <View style={{flex:1,justifyContent:'space-around',alignItems: 'center', backgroundColor:'#dff9d2'}}>
        <Text style={[styles.baseText,styles.Setting_Block]}>Mode:Light</Text>
        <Text style={[styles.baseText,styles.Setting_Block]}>Area/Language:Mainland China</Text>
        <Text style={[styles.baseText,styles.Setting_Block]}>Notification:On</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Setting_Block:{
        color:"black",
        fontSize:32,
        textAlign:'justify',
        textAlignVertical:'center',
        backgroundColor:"white",
        width: Dimensions.get("window").width/1.01,
        height:Dimensions.get("window").height/5.3,
        borderRadius:20,
      },
})

export default Setting;