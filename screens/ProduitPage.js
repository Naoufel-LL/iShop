import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constans/Colors'
import moment from 'moment';
import { Ionicons } from "@expo/vector-icons";
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
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
const ProduitPage = ({navigation,route}) => {
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
      
const data = route.params.data
navigation.setOptions({ title: data.product_title})
console.log(data)
const dateTimeAgo = moment(new Date(data.product_time)).fromNow();

 if(fontsLoaded){
    return (
        <ScrollView>
            <View style={styles.container}>
        <Image
          source={{ uri: data.product_img }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{data.product_title}</Text>
          <Text style={styles.price}>{data.product_price} DH</Text>
          <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20}}>
            Desciption
          </Text>
          <Text style={styles.description}>
            {data.product_desc}
          </Text>
           <View>
           <View style={styles.row}>
              <Text style={styles.text}><Ionicons name='list' /> Catégorie</Text>
              <Text style={styles.text}>{data.product_categorie}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}><Ionicons name="pin" /> Ville</Text>
              <Text style={styles.text}>{data.product_city}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}><Ionicons name="gift" /> Stock</Text>
              <Text style={styles.text}>{data.product_stock}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Condition</Text>
              <Text style={styles.text}>{data.product_condition}</Text>
            </View>
           </View>
           <Text></Text>
           <Text style={styles.text}><Ionicons name='time' /> Posted  {dateTimeAgo}</Text>
        </View>
        
        <View style={{justifyContent:'center',alignContent:'center',width:'100%',alignItems:'center'}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("CommanderPage",{data:data})}
          style={{
            width:'70%',
            padding: 10 * 2,
            backgroundColor: Colors.main,
            marginVertical: 10 * 3,
            borderRadius: 10,
            shadowColor: Colors.main,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color:'#fff',
              textAlign: "center",
              fontSize: 19,
            }}
          >
              Commander
          </Text>
        </TouchableOpacity>
        <View  style={{borderRadius:5,padding:10,width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:Colors.back}}>
           <Image style={{width:50,height:50,borderRadius:50}} source={{uri: data.owner_pic}}></Image>
           <View>
           <Text style={styles.text2}>{data.owner_name}</Text>
           <Text style={styles.text2}>Vendeur</Text>
           </View>
           <TouchableOpacity onPress={()=>navigation.navigate("Seller",{sellerId:data.owner_id,sellerName:data.owner_name,sellerPic:data.owner_pic})}>
            <Text style={{fontFamily:'Poppins_600SemiBold'}}>View Profil</Text>
           </TouchableOpacity>
        </View>
        <Text></Text>
        </View>
      </View>
        </ScrollView>
      )
 }
}
const styles = StyleSheet.create({
    container: {
      fontFamily:"Poppins_400Regular",
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.4)',
    },
    image: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
    },
    detailsContainer: {
      fontFamily:"Poppins_400Regular",
      padding: 15,
    },
    title: {
      fontFamily:"Poppins_600SemiBold",
      fontSize: 24,
      marginBottom: 10,
    },
    price: {
      fontFamily:"Poppins_400Regular",
      fontSize: 18,
      color:  Colors.main,
      marginBottom: 10,
    },
    description: {
      fontFamily:"Poppins_400Regular",
      fontSize: 16,
      marginBottom: 10,
    },
    row:{
        borderBottomWidth:0.5,
        borderBottomColor:"rgba(0,0,0,0.2)",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:10
    },
    text:{
      fontFamily:"Poppins_400Regular", 
    },
    text2:{
      fontFamily:"Poppins_400Regular",
    }
  });
  
export default ProduitPage