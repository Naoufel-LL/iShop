import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Start from './screens/Start';
import Home from './screens/Home';
import Tabs from './Tabs';
import { auth } from "./firebase";
import Register2 from './screens/Register2';
import AddProduit from './screens/AddProduit';
import ProduitPage from './screens/ProduitPage';
import CatergoriePage from './screens/CatergoriePage';
import Seller from './screens/Seller';
import Colors from './constans/Colors';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='start'>
      <Stack.Screen name="start" component={Start}  options={{headerShown:false}} />
      <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="register" component={Register} options={{headerShown:false}}  />
      <Stack.Screen name="register2" component={Register2} options={{headerShown:false}}  />
      <Stack.Screen name="home" component={Tabs}  options={{headerShown:false}} />
      <Stack.Screen name="Seller" component={Seller} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}/>
      <Stack.Screen name="ProduitPage" component={ProduitPage} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}/>
      <Stack.Screen name="CategoriePage" component={CatergoriePage} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}/>
      <Stack.Screen name="addProduit" component={AddProduit}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;