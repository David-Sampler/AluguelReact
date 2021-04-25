import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import Swiper from 'react-native-swiper'

export default function backSwiper(){
    return(
        <Swiper style={styles.wraper} dotStyle={{
            backgroundColor:"#000",
            borderColor:"#000",
            borderRadius:10,
            borderWidth:1,
            width:10,
            height:10,

        }} 
        activeDotColor="#fff"
        activeDotStyle={{
            borderColor:"#000",
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10
        }}
        >
            <View>
                <Image source={require("../assets/house1.jpg")} style={{width:'100%',height:300}}/>
            </View>
            <View>
                <Image source={require("../assets/house2.jpg")}  style={{width:'100%',height:300}} />
            </View>

            <View>
            <Image source={require("../assets/house3.jpg")}  style={{width:'100%',height:300}} />

            </View>
            <View>
            <Image source={require("../assets/house4.jpg")}  style={{width:'100%',height:300}} />

            </View>


        </Swiper>
    )
}

const styles = StyleSheet.create({
    wraper:{
    }
})