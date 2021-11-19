import React, {useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/Ionicons';

const MedicineList = ({ navigation }) => {
    const list=[
        {
            title:'Paracetamol',
            icon: 'medicine',
            subtitle: 'take 1 dose for every morning/evening after meal'
            // avatar:'../images/Doctor.png'
        },
        {
            title:'Aspirin',
            icon: 'medicine',
            subtitle: 'take 1 dose before sleep'
            // avatar:'../images/Doctor.png'
        },
        {
            title:'Antacids',
            icon: 'medicine',
            subtitle: 'take 1 dose for every morning/afternoon/evening before meal'
            // avatar:'../images/Doctor.png'
        }
    ]

    // const rightbar =() =>{
    //     return(
    //     <TouchableOpacity 
    //             onPress={() => navigation.navigate('AddPatient')}>
    //             <Icon name="md-person-add-sharp" size={23}/>
    //         </TouchableOpacity>
    //     );
    // }
    return(
        <View>
        <View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
        </View>
    );

}

const styles = StyleSheet.create({
    HeaderBox:{
        backgroundColor:'#d2691e',
        height: 230,
        //margin: 5,
        //borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderText:{
        fontWeight: 'bold',
        fontSize: 38,
        paddingTop: 60,
        color: 'white'
    }
});
export default MedicineList;