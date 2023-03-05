import { View, Text,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from '@react-native-material/core';
import Colors from '../constans/Colors';
import { getAuth, signOut } from "firebase/auth";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
      });
      const navigation = useNavigation();
      const SignOutProfile = () =>{
        console.log("out")
        signOut(auth).then(() => {
          navigation.replace("login")
          console.log(auth.currentUser)
        }).catch((error) => {
        });
      }
     if(fontsLoaded){
        return (
            <View style={{width:'100%',height:80,backgroundColor:Colors.main,justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:20}}>
                <TouchableOpacity>
                <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                </TouchableOpacity>
                <Text style={{fontFamily:"Poppins_700Bold",fontSize:22,color:"#fff"}}>iShop</Text>
                <TouchableOpacity onPress={()=>SignOutProfile()}>
                <Ionicons name="log-out-outline" size={36} color="#fff"></Ionicons>
                </TouchableOpacity>
              </View>
          )
     }
}

export default Header