import { View, Text,Image} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Colors from "../constans/Colors"
import { Ionicons } from "@expo/vector-icons";

const Start = ({navigation}) => {
  return (
    <Onboarding
    onDone={()=>navigation.replace("login")}
    pages={[
      {
        backgroundColor: Colors.back,
        image: <Image resizeMode='cover'style={{width:'100%',height:350}} source={require('../assets/add_cart.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: Colors.back,
        image: <Image resizeMode='contain'style={{width:'100%',height:350}} source={require('../assets/shopping2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: Colors.back,
        image: <Image resizeMode='contain'style={{width:'100%',height:350}} source={require('../assets/add_cart.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    ]}
  />
  )
}

export default Start
