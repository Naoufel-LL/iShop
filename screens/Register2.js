import { View,Text,SafeAreaView,TextInput,TouchableOpacity, ScrollView} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react'
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
import { useState } from 'react';
import Colors from '../constans/Colors';
import { Ionicons } from "@expo/vector-icons";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth,db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 
import { Alert } from 'react-native';

const Register2 = ({navigation,route}) =>{
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
      const [focused, setFocused] = useState(false);
      const [focused1, setFocused1] = useState(false);
      const [focused2, setFocused2] = useState(false);
      const [focused3, setFocused3] = useState(false);
      const [firstName,setFirstName] = useState('')
      const [lastName,setLastName] = useState('')
      const [phone,setPhone] = useState('')
      const [adress,setAdress] = useState('')
      const [selectedCity, setSelectedCity] = useState('');
      const [date, setDate] = useState(new Date());
      const [showPicker, setShowPicker] = useState(false);
      const [dateText,setDateText] = useState("Select Your Birthday")
      const onChangeDate = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
          setDate(selectedDate);
          console.log(selectedDate.toLocaleDateString())
          setDateText(selectedDate.toLocaleDateString())
        }
      };
      function validerTel(telephone) {
        var pattern = /^0[67][0-9]{8}$/;
      
        if (!pattern.test(telephone)) {
          Alert.alert("Numéro à 10 chiffres sans espace et commençant par 06 ou 07");
          return false;
        }
      
        return true;
      }
const cities = [
  'Select City',
  'Agadir',
  'Ait Melloul',
  'Al Hoceima',
  'Azemmour',
  'Azrou',
  'Beni Mellal',
  'Benslimane',
  'Berkane',
  'Berrechid',
  'Bouskoura',
  'Casablanca',
  'Chefchaouen',
  'Dakhla',
  'El Jadida',
  'Errachidia',
  'Essaouira',
  'Fès',
  'Fnideq',
  'Guelmim',
  'Ifrane',
  'Kénitra',
  'Khemisset',
  'Khouribga',
  'Ksar El Kebir',
  'Laâyoune',
  'Larache',
  'Marrakech',
  'Meknès',
  'Midelt',
  'Mohammédia',
  'Nador',
  'Ouarzazate',
  'Oued Zem',
  'Oujda',
  'Rabat',
  'Safi',
  'Sale',
  'Sefrou',
  'Settat',
  'Sidi Bennour',
  'Sidi Ifni',
  'Sidi Kacem',
  'Sidi Slimane',
  'Skhirat',
  'Souk El Arbaa',
  'Tanger',
  'Tan-Tan',
  'Taounate',
  'Taourirt',
  'Taroudant',
  'Taza',
  'Témara',
  'Tétouan',
  'Tiflet',
  'Tinghir',
  'Tiznit',
  'Youssoufia',
];
const email = route.params.email
const password = route.params.password
const handleSignUp =  () =>{
     if(firstName != '' && lastName != '' && adress != '' && selectedCity != 'Select City' && validerTel(phone)){
        
        signInWithEmailAndPassword(auth,email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
          const docRef = addDoc(collection(db, "users"), {
            email: email,
            firstName:firstName,
            lastName:lastName,
            adress:adress,
            city:selectedCity,
            birth:date,
            verified: false,
          });
          console.log("Document written with ID: ", docRef.id);
          navigation.navigate("home")
        })
        .catch(error => alert(error.message))    
     }else{
         Alert.alert("")
     }
     
}
 
if(fontsLoaded){
 return(
    <SafeAreaView style={{paddingTop:'10%',justifyContent:'center',alignContent:'center',width:"100%",alignItems:"center"}}>
      <ScrollView style={{width:"100%"}}>
        <Text style={{fontFamily:"Poppins_700Bold",fontSize:25,color:Colors.main,textAlign: 'center'}}>
         Register Here
       </Text>
       <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:15,paddingVertical:10,textAlign:'center',width:'100%'}}>
         Fill the form to register
       </Text>

       <View style={{width:'100%',justifyContent:"center",alignItems:'center',paddingVertical:20}}>
        <TextInput
        required
        value={firstName}
        onChangeText={(text)=>setFirstName(text)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          { fontFamily:"Poppins_400Regular",
          fontSize:15,
          padding: 10 * 2,
          backgroundColor: Colors.back,
          borderRadius: 10,
          marginVertical: 10,width:"80%"},
          focused && {
            borderWidth: 3,
            borderColor: Colors.main,
            shadowOffset: { width: 4, height: 10 },
            shadowColor: Colors.main,
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]} placeholder="Enter Your FirstName">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused1(true)}
           onBlur={() => setFocused1(false)}
          value={lastName}
          onChangeText={(text)=>setLastName(text)}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused1 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          placeholder="Enter Your LastName">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused2(true)}
           onBlur={() => {setFocused2(false);validerTel(phone)}}
          value={phone}
          onChangeText={(text)=>setPhone(text)}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused2 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          keyboardType='numeric'
          placeholder="Enter Your Phone Number">
          </TextInput>
          <TextInput
          required
           onFocus={() => setFocused3(true)}
           onBlur={() => setFocused3(false)}
          value={adress}
          onChangeText={(text)=>setAdress(text)}
           style={[
            { fontFamily:"Poppins_400Regular",
            fontSize:15,
            padding: 10 * 2,
            backgroundColor: Colors.back,
            borderRadius: 10,
            marginVertical: 10,width:"80%"},
            focused3 && {
              borderWidth: 3,
              borderColor: Colors.main,
              shadowOffset: { width: 4, height: 10 },
              shadowColor: Colors.main,
              shadowOpacity: 0.2,
              shadowRadius: 10,
            },
          ]}
          placeholder="Enter Your Adresse">
        </TextInput>
      
    <View style={{width:"80%",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
      <Picker
        placeholder='Select City'
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) =>
          {setSelectedCity(itemValue);console.log(itemValue)}
        }
        style={{width: "100%",backgroundColor:Colors.back,marginVertical:15,borderRadius:10,padding:32}}
      >
        {cities.map(city => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
      </View>
    </View>
      <TouchableOpacity style={{width:"80%",backgroundColor:Colors.back,padding:20,borderRadius:10,marginVertical:10}} onPress={() => setShowPicker(true)}>
        <Text style={{fontFamily:"Poppins_400Regular"}}>{dateText}</Text>
      </TouchableOpacity>
      {showPicker && 
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={onChangeDate}
        />
      }
      <TouchableOpacity
          onPress={()=>handleSignUp()}
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
            Sign up
          </Text>
        </TouchableOpacity>
      
          
    
          
        </View>
        </ScrollView>
    </SafeAreaView>
 )
 }
 }


export default Register2