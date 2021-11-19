import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

import PatientProfile from './PatientProfile';
import PatientAppointment from './PatientAppointment';
import MedicineList from './MedicineList';
import MedicineInfo from './MedicineInfo';
// import AppointmentInfo from './AppointmentInfo';
// import AddPatient from './AddPatient';
// import AddAppointment from './AddAppointment';
// import EditProfile from './EditProfile';
import PatientLogin from '../PatientAuthScreen/PatientLogin';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PatientProfileScreen =({ navigation }) => {
    return(
        <Stack.Navigator initialRouteName="MedicineList">
        <Stack.Screen
            name="PatientProfile"
            component={PatientProfile} 
            options={{
                headerRight: () => ( 
                    <TouchableOpacity 
        onPress={() => navigation.goBack('PatientLogin')}>
        <MaterialCommunityIcon name="account-edit" size={28} color='white'/>
    </TouchableOpacity>    
                ),
                headerStyle: { backgroundColor: '#d2691e'},
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
            }}/>
        <Stack.Screen
            name="PatientLogin"
            component={PatientLogin}
            />
    </Stack.Navigator>
    );
}

const MedicineListScreen = ({ navigation }) => {
    return (
            <Stack.Navigator initialRouteName="MedicineList">
                <Stack.Screen
                    name="MedicinetList"
                    component={MedicineList} 
                    options={{
            //             headerRight: () => ( 
            //                 <TouchableOpacity 
            //     onPress={() => navigation.navigate('AddPatient')}>
            //     <Icon name="md-person-add-sharp" size={23} color='white'/>
            // </TouchableOpacity>    
            //             ),
                        headerStyle: { backgroundColor: '#d2691e'},
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
                    }}/>
                <Stack.Screen
                    name="MedicineInfo"
                    component={MedicineInfo} />
                {/* <Stack.Screen
                    name="AddPatient"
                    component={AddPatient} 
                    options={{
                        headerStyle: { backgroundColor: '#d2691e'},
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
                    }}/> */}
            </Stack.Navigator>
        
    );
};

const AppointmentScreen = ({ navigation }) => {
    return (
        
            <Stack.Navigator initialRouteName="PatientAppointment">
                <Stack.Screen
                    name="PatientAppointment"
                    component={PatientAppointment}
                    options={{
                        title: 'Upcoming Appointment',
                        headerStyle: { backgroundColor: '#d2691e'},
                        headerTintColor: '#fff',
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 20},
                        }} />
                {/* <Stack.Screen
                    name="AppointmentInfo"
                    component={AppointmentInfo} />
                <Stack.Screen
                    name="AddAppointment"
                    component={AddAppointment} /> */}
            </Stack.Navigator>
        
    );
};

const PatientRoute = () => {
    return(
        <Tab.Navigator
            initialRouteName="PatientProfileScreen"
            screenOptions={{ tabBarActiveTintColor: '#d2691e', }}>
                <Tab.Screen
                    name="PatientProfileScreen"
                    component={PatientProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size}) =>(
                            <MaterialCommunityIcon name="face-profile" color={color} size={size}
                             />
                        ), headerShown: false
                    }}
                />
                <Tab.Screen
                    name="MedicineListScreen"
                    component={MedicineListScreen}
                    options={{
                        tabBarLabel: 'Medicine',
                        tabBarIcon: ({ color, size}) =>(
                            <MaterialCommunityIcon name="human-wheelchair" color={color} size={size} />
                        ), headerShown: false
                    }}
                />
                <Tab.Screen
                    name="AppointmentScreen"
                    component={AppointmentScreen}
                    options={{
                        tabBarLabel: 'Appointment',
                        tabBarIcon: ({ color, size}) =>(
                            <MaterialCommunityIcon name="calendar" color={color} size={size} />
                        ), headerShown: false,
                    }}
                />
        </Tab.Navigator>

    );
};

export default PatientRoute;