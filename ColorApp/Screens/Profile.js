import React from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';

const Profile = ({navigation}) => {
    return (
    <View style={{flex:1,justifyContent:'space-around',alignItems: 'center', backgroundColor:'#d2f9f5'}}>
        <Text style={styles.Profile_Block}>Gender:Male/Female</Text>
        <Text style={styles.Profile_Block}>Age:25</Text>
        <Text style={styles.Profile_Block}>Height:180cm</Text>
        <Text style={styles.Profile_Block}>Weight:70kg</Text>
        <Text style={styles.Profile_Block}>Sports:Badminton</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    Profile_Block:{
        color:"black",
        fontSize:29,
        textAlign:'justify',
        textAlignVertical:'center',
        backgroundColor:"white",
        width: Dimensions.get("window").width/1.01,
        height:Dimensions.get("window").height/7,
        borderRadius:20,
    },
})

export default Profile;