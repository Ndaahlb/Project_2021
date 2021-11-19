import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Caption, Text} from 'react-native-paper';

const MedicineInfo = ({ navigation }) => {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                source={require('../images/Doctor.png')}
                size={80}
                />
            <View style={{marginLeft: 20}}>
                <Title style={styles.title,{
                    marginTop: 15,
                    marginBottom: 5
                }}>Abdullah Halae</Title>
                <Caption style={styles.caption}>@NadaHlb</Caption>
            </View>
            </View>
        </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>Pattani, Thailand</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>+66 -96-333-4534</Text>
            </View>
            <View style={styles.row}> 
                <Icon name="email" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>Abdulahdfdd@gmail.com</Text>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>AB</Text>
            </View>
            <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>Gastritis</Text>
            </View>
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
                <Title>50</Title>
                <Caption>Patients</Caption>
            </View>
            <View style={styles.infoBox}>
                <Title>20</Title>
                <Caption>Appointment</Caption>
            </View>
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
                <Title>50</Title>
                <Caption>Patients</Caption>
            </View>
            <View style={styles.infoBox}>
                <Title>20</Title>
                <Caption>Appointment</Caption>
            </View>
        </View>
    </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoBoxWrapper:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
});
export default MedicineInfo;