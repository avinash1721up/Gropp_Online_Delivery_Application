import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import swiper from 'react-native-swiper'
import {colors} from '../globals/style'
import Swiper from 'react-native-swiper'

const carouseldata =[
  {
    id:1,
    image : '../../assets/OfferSliderImage/img1.png'
  },
  {
    id:2,
    image : '../../assets/OfferSliderImage/img2.png'
  },
  {
    id:3,
    image : '../../assets/OfferSliderImage/img3.png'
  }
]
 
const OfferSlider = () => {
  return (
    <View>
      <View style ={styles.offerSlider}>
            <Swiper autoplay ={true} showsButtons={true} autoplayTimeout={5} dotColor={colors.text2} activeDotColor={colors.text1}
            
            >
              <View style={styles.slide}>
                   <Image source ={require('../../assets/OfferSliderImage/img1.png')} style={styles.image}/>
              </View>
              <View style={styles.slide}>
                   <Image source ={require('../../assets/OfferSliderImage/img2.png')} style={styles.image}/>
              </View>
              <View style={styles.slide}>
                   <Image source ={require('../../assets/OfferSliderImage/img3.png')} style={styles.image}/>
              </View>
            </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerSlider:{
    width :'100%',
    height:200,
    backgroundColor :colors.col1,
    paddingHorizontal:10,
    justifyContent: 'center',
    alignItems:'center',
    marginVertical :10,
  },
  slide:{
    width: '100%',
    height :200,
    backgroundColor : colors.col1,
    justifyContent:'center',
    alignItems: 'center',

  },
  image:{
    width :'100%',
    height:'100%',
    borderRadius:20,
  }
})