import { View, Text,ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {auth,db} from '../firebase'
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
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
const Home = ({navigation}) => {
  const [products,setProducts]=useState([])
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
    try {
        const list = []
        console.log("clear")
        const q = query(collection(db, "produits"))
       const unsubscribe = onSnapshot(q, (querySnapshot) => {
     querySnapshot.forEach((doc) => {
      const {
        owner_id,
        owner_name,
        owner_pic,
        owner_tel,
        product_title,
        product_price,
        product_img,
        product_desc,
        product_categorie,
        product_city,
        product_stock,
        product_condition,
      } = doc.data();
      list.push({
        owner_id:owner_id,
        owner_name:owner_name,
        owner_pic:owner_pic,
        owner_tel:owner_tel,
        product_title:product_title,
        product_price:product_price,
        product_img:product_img,
        product_desc:product_desc,
        product_categorie:product_categorie,
        product_city:product_city,
        product_stock:product_stock,
        product_condition:product_condition,
      });
       console.log(products)
     });
setProducts(list)

});
     } catch (error) {
       alert(error)
     }
  },[])
  /*console.log(new Date((1578316263249)))*/
 if(fontsLoaded){
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <View>
      <Header />
      </View>
      <View style={{justifyContent:"center",alignItems:"center",paddingVertical:20}}> 
      <Image style={{width:'90%',height:200,borderRadius:20}} source={require("../assets/board3.png")}></Image>
       </View>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>

         {products.map((data)=>{
             return(
                <ItemCard  data={data} />
             )
         })}       

       </View>
    </ScrollView>
  )
 }
}

export default Home
import Header from './Header';
import ItemCard from '../components/ItemCard';
