import * as React from 'react';
import { ScrollView,TouchableOpacity,StyleSheet, Text, View,Dimensions,Image} from 'react-native';
import { Root, Popup } from 'popup-ui';

function BodyState ({navigation}) {
    return(
 <Root>
  <ScrollView>
    <View>
        <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Success',
                title: 'Standard CK-enzyme Value',
                button: true,
                textBody: 'Congrats! You are in good shape ',
                buttonText: 'OK',
                callback: () => Popup.hide()
              })
            }
          >
            <View style = {styles.Profile_Block}>
              <Text style = {styles.TimeText}>2022-6-21</Text>
              <Text style = {styles.StandardText}>
              <Image
                style={styles.TinyLogo}
                source={require('../src/assets/Normal.png')}
              />NORMAL
              </Text>
              <Text style = {styles.TimeText}>14 : 52 </Text>
            </View>
        </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Warning',
                title: 'CK-enzyme value critical level',
                button: true,
                textBody: 'Warning! Please reduce practice value ',
                buttonText: 'OK',
                callback: () => Popup.hide(),
              })
            }
          >
            <View style = {styles.Profile_Block}>
              <Text style = {styles.TimeText}>2022-6-25</Text>
              <Text style = {styles.WarningText}>
                <Image
                style={styles.TinyLogo}
                source={require('../src/assets/Warning.png')}
                /> WARNING
              </Text> 
              <Text style = {styles.TimeText}>15 : 48 </Text>
            </View>
        </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Danger',
                title: 'Abnormal CK-enzyme value',
                button: true,
                textBody: 'Danger! Please seek medical assistance as soon as possible ',
                buttonText: 'OK',
                callback: () => Popup.hide(),
              })
            }
          >
            <View style = {styles.Profile_Block}>
              <Text style = {styles.TimeText}>2022-6-30</Text>
              <Text style = {styles.DangerText}>
                <Image
                style={styles.TinyLogo}
                source={require('../src/assets/Danger.png')}
                /> DANGER
              </Text>
              <Text style = {styles.TimeText}>11 : 32 </Text>
            </View>
        </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'Success',
                title: 'Standard CK-enzyme Value',
                button: true,
                textBody: 'Congrats! You are in good shape ',
                buttonText: 'OK',
                callback: () => Popup.hide(),
              })
            }
          >
            <View style = {styles.Profile_Block}>
              <Text style = {styles.TimeText}>2022-7-3</Text>
              <Text style = {styles.StandardText}>
              <Image
                style={styles.TinyLogo}
                source={require('../src/assets/Normal.png')}
              />NORMAL
              </Text> 
              <Text style = {styles.TimeText}>15 : 20 </Text>
            </View>
        </TouchableOpacity>
    </View>
  </ScrollView>
</Root>

  )
}


const styles = StyleSheet.create({
    Profile_Block:{
        paddingHorizontal: 8,
        paddingVertical: Dimensions.get("window").height/20,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginVertical: "5%",
        marginBottom: 6,
        minWidth: "95%",
    },
    TimeText:
    {
      textAlign: "left",
      fontSize:20,
      fontWeight:'500',
    },
    StandardText:
    {
      textAlign: "right",
      fontSize:35,
      fontWeight:'780',
      color:"#196e08",
      letterSpacing:4,
    },
    WarningText:
    {
      textAlign: "right",
      fontSize:35,
      fontWeight:'780',
      color:"#ffad0f",
      letterSpacing:0.5,
    },
    DangerText:
    {
      textAlign: "right",
      fontSize:35,
      fontWeight:'780',
      color:"#ff491a",
      letterSpacing:4,
    },
    TinyLogo: {
    width: 50,
    height: 50,
  },
});

export default BodyState;