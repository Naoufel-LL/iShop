import { View, Text ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from './Header'
import CategorieItem from '../components/CategorieItem'
import { getAuth } from 'firebase/auth'
const Categories = () => {
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <Header />
      <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Beauty.gif'/>
            </TouchableOpacity> 
            <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Mode-Femme.gif'/>
              </TouchableOpacity>     
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Mode-Homme.gif'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Mode-Enfant.gif'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Tvs.gif'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-Maison.gif'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-informatique.gif'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-copy-7.png'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-copy-2.png'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/z-Middle-Thumbs/300x300-copy-5.png'/>
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Supermarche.gif'/>       
              </TouchableOpacity>
              <TouchableOpacity>
       <CategorieItem imgUrl='https://ma.jumia.is/cms/000_2022/100002-T1-BF22/Live/300x300-Telephone.gif'/>
          </TouchableOpacity> 
      </View>
    </ScrollView>
  )
}

export default Categories