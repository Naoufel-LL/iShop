import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './Header'

const Orders = ({navigation}) => {
  return (
    <View>
        <Header></Header>
      <Text>Orders</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("addProduit")}> 
        <Text>Add Produit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Orders