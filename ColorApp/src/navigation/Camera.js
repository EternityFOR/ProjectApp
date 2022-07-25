import React, { useState, useEffect } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TouchableHighlight,Image,Button} from 'react-native';
import { Camera, CameraType } from 'expo-camera';

function Camera2 ({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.scan2frame}>
          <Image style = {styles.imagestyle} 
                 source = {require('../../src/assets/scan2.png')} />
          <Button
          title="Take Picture"
          onPress={() => navigation.navigate("Records")}
          />
        </View>
 
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("Scan2")}
              underlayColor="transparent">
              <Text style = {styles.text}>Back</Text> 
          </TouchableHighlight>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems:'flex-end',
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  scan2frame:{
    flex: 25,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  imagestyle: {
            width: 300,
            height: 300,
            resizeMode: 'cover',
            resizeMethod:'contain',
  },
});

export default Camera2;