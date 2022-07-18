import * as React from 'react';
import { Switch,ScrollView,TouchableOpacity,StyleSheet, Text, View, Image,Dimensions} from 'react-native';

const Scan = ({navigation}) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#fff'}}>
          <Image style = {styles.imagestyle} 
                 source = {require('../src/assets/scan.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    imagestyle: {
            width: 200,
            height: 200,
            resizeMode: 'cover',
            resizeMethod:'contain',
          },
})

export default Scan;