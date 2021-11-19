import React, { Component } from 'react'
import {View, Image, StyleSheet, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LinearGradient from 'react-native-linear-gradient';


import Doctor from '../images/Doctor.png';
import Patient from '../images/Patient.png';



 class Login extends Component {
    render() {
        return (
            
            <View
            style={{
                flex: 1,
            }}>
            <LinearGradient colors={['#BE93C5', '#7BC6CC']} style={{flex:1}}>
            <Text style = {styles.Text}>Login as</Text>
            {/* <TouchableOpacity  style={styles.loginAsImage} >
               <Image style={{marginTop: 20,marginStart: 80,width: 100,height: 100}} 
               source={require("../images/Doctor.png")} 
               onPress={() => navigation.navigate('Login_doctor')}/>
               <Image style={{marginTop: 20, marginStart: 50,marginEnd: 10,width: 100,height: 100}} 
               source={require("../images/Patient.png")}
               onPress={() => this.props.navigation.navigate('Login_patient')}/> 
            </TouchableOpacity> */}
            
            <SafeAreaView style={styles.container}>
             <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DoctorLogin')}>
              <Image style={styles.doctor} source={require("../images/Doctor.png")}/>
             </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('PatientLogin')}>
              <Image style={styles.patient} source={require("../images/Patient.png")}/>
            </TouchableOpacity>
           </SafeAreaView>

            <TouchableOpacity style={styles.loginAsText} >
              <Text style = {{color: '#ffffff', marginStart: 100, fontSize: 20}}>Doctor</Text>
              <Text style = {{color: '#ffffff', marginStart: 110, fontSize: 20}}>Patient</Text>
            </TouchableOpacity>
              
            </LinearGradient>
            </View>
            
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    Text : {
    color: '#ffffff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 30,
    fontWeight: '300',
    paddingTop: 100,
    flexDirection: 'column',
    textAlign: 'center',
    },
    container: {
        width: 100,
        height: 100,
        paddingTop: 50,
        flexDirection: 'row',
    },
    doctor : {
        marginTop: 20,
        marginStart: 70,
        width: 120,
        height: 120
    },
    patient : {
        marginTop: 20, 
        marginStart: 50,
        //marginEnd: 10,
        width: 120,
        height: 120
    },
    loginAsText : {
        color: '#ffffff',
        paddingTop: 110,
        fontFamily: 'GoogleSans-Bold',
        flexDirection: 'row',
        fontSize: 30,
    },
    // loginAsImage: {
    //     width: 100,
    //     height: 100,
    //     paddingTop: 50,
    //     flexDirection: 'row',
    //     //justifyContent: 'space-between',
    //     },
});