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

const Myshop = ({navigation,route}) => {
  
  const addProduct = () => {
    navigation.navigate("addProduit")
  };
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(false)
  
  useLayoutEffect(()=>{
    const list = []
    const q = query(collection(db, "produits"),where("owner_id", "==", auth.currentUser.uid))
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
 querySnapshot.forEach((doc) => {
  const {
    owner_id,
    owner_name,
    owner_pic,
    owner_tel,
    product_title,
    product_time,
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
    product_time:product_time,
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
 });
 setProducts(list)
 setLoading(true)
 console.log(products.length)
});
  },[])
  navigation.setOptions({ tabBarBadge: products.length})

  return (
    <View>
      <ScrollView>
      <TouchableOpacity  onPress={addProduct}>
        <View style={{ backgroundColor: Colors.main, padding: 10, marginRight:200,borderRadius:20, }}>
        <Text style={{fontSize: 20, marginLeft:35,color:'white'  }}>Add a product</Text>
        </View>
      </TouchableOpacity>

      {!loading ? 
       <View>
        <ActivityIndicator size={20}/>
       </View>
      : 
      <ScrollView>
       <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
         {products.map((data)=>{
             return(
              <TouchableOpacity onLongPress={()=>Alert.alert("Long")} style={{width:"50%"}} onPress={()=>navigation.navigate("ProduitPage",{data:data})}>
                <ItemCard key={data.owner_id} data={data} />
              </TouchableOpacity>
             )
         })}       
       </View>
        </ScrollView>
      }


      </ScrollView>
      
    </View>
  );
}

export default Myshop;