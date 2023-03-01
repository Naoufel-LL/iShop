import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Start from './screens/Start';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='start'>
      <Stack.Screen name="start" component={Start}  options={{headerShown:false}} />
      <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="register" component={Register} options={{headerShown:false}}  />
      <Stack.Screen name="home" component={Home}   />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;