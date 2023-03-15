import { View, Text,TouchableOpacity,ScrollView,ActivityIndicator,Image, Alert} from 'react-native'
import React from 'react'
import { useState,useEffect,useLayoutEffect} from 'react';
import {auth,db} from '../firebase'
import Colors from '../constans/Colors'

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
import ItemCard from '../components/ItemCard';
import { collection, query, where, onSnapshot ,orderBy } from "firebase/firestore";
import OrderItem from '../components/OrderItem';

const Commandes = ({navigation}) => {
  const [commandes,setCommandes]=useState([])
  const [loading,setLoading]=useState(false)

  useLayoutEffect(()=>{
    const list = []
    const q = query(collection(db, "commandes"),where("seller_id", "==", auth.currentUser.uid))
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
 querySnapshot.forEach((doc) => {
  const {
    product_id,
    product_img,
    product_title,
    seller_id,
    seller_pic,
    seller_name,
    buyer_id,
    buyer_tel,
    buyer_adress,
    buyer_codePostal,
    buyer_pic,
    buyer_name,
    quantity,
    buy_time,
    total,
    statut
  } = doc.data();
  list.push({
    product_id:product_id,
    product_img:product_img,
    product_title:product_title,
    seller_id:seller_id,
    seller_pic:seller_pic,
    seller_name:seller_name,
    buyer_id:buyer_id,
    buyer_tel:buyer_tel,
    buyer_adress:buyer_adress,
    buyer_codePostal:buyer_codePostal,
    buyer_pic:buyer_pic,
    buyer_name:buyer_name,
    quantity:quantity,
    buy_time:buy_time,
    total:total,
    statut:statut,
  });
 });
 setCommandes(list)
 setLoading(true)
});
  },[])
  navigation.setOptions({ tabBarBadge: commandes.length})
  return (
    <ScrollView>
      {!loading ? 
       <View>
        <ActivityIndicator size={20}/>
       </View>
      : 
      <ScrollView>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",}}>
          <Text>Commandes</Text> 
          {commandes.map((data)=>{
              return(
                <TouchableOpacity>
                <OrderItem data={data}/>
                </TouchableOpacity>
              )
          })}
       </View>
        </ScrollView>
      }
    </ScrollView>
  )
}

export default Commandes