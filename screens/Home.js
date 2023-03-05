import { View, Text,ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {auth} from '../firebase'
import { Ionicons } from "@expo/vector-icons";
import Colors from '../constans/Colors';
import { getAuth, signOut } from "firebase/auth";
import { useState,useEffect,useLayoutEffect} from 'react';
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
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
const Home = ({navigation}) => {
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
  useLayoutEffect(()=>{
    console.log("yes");
    try {
      const db = getFirestore()
      const colRef = collection(db, "produits")
      getDocs(colRef)
    .then((snapshot) => {
      let collection = []
      snapshot.docs.forEach((doc) => {
          console.log(doc.data().title)
       })
    })
     } catch (error) {
       alert(error)
     }
  })
  
 if(fontsLoaded){
  return (
    <ScrollView>
      <View>
      <Header />
      </View>
      <View style={{justifyContent:"center",alignItems:"center",paddingVertical:20}}> 
      <Image style={{width:'90%',height:200,borderRadius:20}} source={require("../assets/board3.png")}></Image>
       </View>
       <Text>f</Text>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />

       </View>
    </ScrollView>
  )
 }
}

export default Home
import Header from './Header';
import ItemCard from '../components/ItemCard';
