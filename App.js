import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PatientLogin from './src/PatientAuthScreen/PatientLogin';
import DoctorRegister from './src/DoctorAuthScreen/DoctorRegister';
import PatientRoute from './src/PatientScreen/PatientRoute';



const Stack = createNativeStackNavigator();

const Auth =() => {
  return (
    <Stack.Navigator initialRouteName="PatientLogin"  >
        <Stack.Screen name="Login" component={PatientLogin} 
          options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={DoctorRegister} 
          options={{ headerShown: false}}/>
      </Stack.Navigator>
  
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PatientRoute"
          component={PatientRoute}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}