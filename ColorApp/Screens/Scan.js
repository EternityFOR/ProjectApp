import * as React from 'react';
import { StyleSheet, View, Image,Button} from 'react-native';

function Scan ({navigation}) {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#fff'}}>
          <Image style = {styles.imagestyle} 
                 source = {require('../src/assets/scan.png')} />
          <Button
          title="Click here"
          onPress={() => navigation.navigate("Cam")}
          />
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